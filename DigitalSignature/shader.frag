#version 450
#extension GL_ARB_separate_shader_objects : enable

layout( binding = 0 ) uniform UniformBufferObject
{

	vec2 iResolution;
	float iTime;

} ubo;

layout(binding = 1) uniform sampler2D texSampler[2];

layout( location = 0 ) in vec3 fragColor;
layout( location = 0 ) out vec4 outColor;

const float siz = 3.0;

void main()
{ 

	vec2 uv = gl_FragCoord.xy / ubo.iResolution.xy;
    
    vec4 col = texture( texSampler[0], uv );
	vec4 digitalStamp = texture( texSampler[1], uv * siz ); 
  
    float normalized = 1.0 / siz;
    float percentage = 1.0 - normalized;

    // Output to screen
    if( digitalStamp.a > 0.0 && uv.x > percentage && uv.y > normalized * 2.0 )
	{

		col = digitalStamp;

	} 

	outColor = col;

}