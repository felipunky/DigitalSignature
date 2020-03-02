#version 450
#extension GL_ARB_separate_shader_objects : enable

layout( binding = 0 ) uniform UniformBufferObject
{

	vec2 iResolution;
	vec2 iStampResolution;
	float iTime;

} ubo;

layout(binding = 1) uniform sampler2D texSampler[2];

layout( location = 0 ) in vec3 fragColor;
layout( location = 0 ) out vec4 outColor;

const float siz = 2.5;

void main()
{ 

	vec2 fragCoord = gl_FragCoord.xy;
	vec2 uv = fragCoord / ubo.iResolution.xy;
	vec2 uvStamp = fragCoord / ubo.iStampResolution.y;
	uvStamp.x -= 1.0 / ( uv.x / uvStamp.x );
    uvStamp *= siz;
    
    vec4 col = texture( texSampler[0], uv );
	vec4 digitalStamp = texture( texSampler[1], ( uvStamp * siz ) ); 

	float xy = 1.0 / siz;

    if( digitalStamp.a > 0.0 && uvStamp.y < xy && uvStamp.x > -xy )
	{

		col = digitalStamp;

	} 

	outColor = col;

}