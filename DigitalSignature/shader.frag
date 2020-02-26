#version 450
#extension GL_ARB_separate_shader_objects : enable

layout( binding = 0 ) uniform UniformBufferObject
{

	vec2 iResolution;
	float iTime;

} ubo;

layout(binding = 1) uniform sampler2D texSampler;

layout( location = 0 ) in vec3 fragColor;
layout( location = 0 ) out vec4 outColor;

void main()
{ 

	//vec2 uv = ( -ubo.iResolution.xy + 2.0 * gl_FragCoord.xy ) / ubo.iResolution.y;
	vec2 uv = gl_FragCoord.xy / ubo.iResolution.xy;

    outColor = texture( texSampler, uv );

}