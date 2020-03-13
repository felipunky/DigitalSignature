#version 450
#extension GL_ARB_separate_shader_objects : enable

layout( binding = 0 ) uniform UniformBufferObject
{

	vec2 iResolution;
	vec2 iStampResolution;
	vec2 iMove;
	float iSize;
	float iAlpha;
	float iTime;

} ubo;

layout(binding = 1) uniform sampler2D texSampler[2];

layout( location = 0 ) in vec3 fragColor;
layout( location = 0 ) out vec4 outColor;

//const float siz = 5.0;

void main()
{ 

	vec2 fragCoord = vec2( gl_FragCoord.x, ubo.iResolution.y - gl_FragCoord.y );
	vec2 iResolution = vec2( ubo.iResolution.x, -ubo.iResolution.y );
	vec2 iStampResolution = vec2( ubo.iStampResolution.x, -ubo.iStampResolution.y );
	vec2 uv = fragCoord / iResolution;
	vec2 uvStamp = fragCoord / iStampResolution;
	uvStamp.x -= 1.0 / ( uv.x / uvStamp.x );
	uvStamp += ubo.iMove;
    uvStamp *= ubo.iSize;//siz;
    
    vec4 col = texture( texSampler[0], uv );
	vec4 digitalStamp = texture( texSampler[1], uvStamp ); 

    //if( digitalStamp.a > 0.0 && uvStamp.y < xy && uvStamp.x > -xy )
	if( digitalStamp.a > ubo.iAlpha && uvStamp.y > -1.0 && uvStamp.y < 0.0 && uvStamp.x > -1.0 && uvStamp.x < 0.0 )
    {

		col = digitalStamp;

	} 

	outColor = col;

}