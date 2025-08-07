var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2034 = root || request.c( 'UnityEngine.JointSpring' )
  var i2035 = data
  i2034.spring = i2035[0]
  i2034.damper = i2035[1]
  i2034.targetPosition = i2035[2]
  return i2034
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2036 = root || request.c( 'UnityEngine.JointMotor' )
  var i2037 = data
  i2036.m_TargetVelocity = i2037[0]
  i2036.m_Force = i2037[1]
  i2036.m_FreeSpin = i2037[2]
  return i2036
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2038 = root || request.c( 'UnityEngine.JointLimits' )
  var i2039 = data
  i2038.m_Min = i2039[0]
  i2038.m_Max = i2039[1]
  i2038.m_Bounciness = i2039[2]
  i2038.m_BounceMinVelocity = i2039[3]
  i2038.m_ContactDistance = i2039[4]
  i2038.minBounce = i2039[5]
  i2038.maxBounce = i2039[6]
  return i2038
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2040 = root || request.c( 'UnityEngine.JointDrive' )
  var i2041 = data
  i2040.m_PositionSpring = i2041[0]
  i2040.m_PositionDamper = i2041[1]
  i2040.m_MaximumForce = i2041[2]
  i2040.m_UseAcceleration = i2041[3]
  return i2040
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2042 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2043 = data
  i2042.m_Spring = i2043[0]
  i2042.m_Damper = i2043[1]
  return i2042
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2044 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2045 = data
  i2044.m_Limit = i2045[0]
  i2044.m_Bounciness = i2045[1]
  i2044.m_ContactDistance = i2045[2]
  return i2044
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2046 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2047 = data
  i2046.m_ExtremumSlip = i2047[0]
  i2046.m_ExtremumValue = i2047[1]
  i2046.m_AsymptoteSlip = i2047[2]
  i2046.m_AsymptoteValue = i2047[3]
  i2046.m_Stiffness = i2047[4]
  return i2046
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2048 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2049 = data
  i2048.m_LowerAngle = i2049[0]
  i2048.m_UpperAngle = i2049[1]
  return i2048
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2050 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2051 = data
  i2050.m_MotorSpeed = i2051[0]
  i2050.m_MaximumMotorTorque = i2051[1]
  return i2050
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2052 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2053 = data
  i2052.m_DampingRatio = i2053[0]
  i2052.m_Frequency = i2053[1]
  i2052.m_Angle = i2053[2]
  return i2052
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2054 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2055 = data
  i2054.m_LowerTranslation = i2055[0]
  i2054.m_UpperTranslation = i2055[1]
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2057 = data
  i2056.position = new pc.Vec3( i2057[0], i2057[1], i2057[2] )
  i2056.scale = new pc.Vec3( i2057[3], i2057[4], i2057[5] )
  i2056.rotation = new pc.Quat(i2057[6], i2057[7], i2057[8], i2057[9])
  return i2056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2059 = data
  request.r(i2059[0], i2059[1], 0, i2058, 'sharedMesh')
  return i2058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2061 = data
  request.r(i2061[0], i2061[1], 0, i2060, 'additionalVertexStreams')
  i2060.enabled = !!i2061[2]
  request.r(i2061[3], i2061[4], 0, i2060, 'sharedMaterial')
  var i2063 = i2061[5]
  var i2062 = []
  for(var i = 0; i < i2063.length; i += 2) {
  request.r(i2063[i + 0], i2063[i + 1], 2, i2062, '')
  }
  i2060.sharedMaterials = i2062
  i2060.receiveShadows = !!i2061[6]
  i2060.shadowCastingMode = i2061[7]
  i2060.sortingLayerID = i2061[8]
  i2060.sortingOrder = i2061[9]
  i2060.lightmapIndex = i2061[10]
  i2060.lightmapSceneIndex = i2061[11]
  i2060.lightmapScaleOffset = new pc.Vec4( i2061[12], i2061[13], i2061[14], i2061[15] )
  i2060.lightProbeUsage = i2061[16]
  i2060.reflectionProbeUsage = i2061[17]
  return i2060
}

Deserializers["Box"] = function (request, data, root) {
  var i2066 = root || request.c( 'Box' )
  var i2067 = data
  i2066.boxGroupIndex = i2067[0]
  request.r(i2067[1], i2067[2], 0, i2066, 'goodsPos')
  request.r(i2067[3], i2067[4], 0, i2066, 'goods')
  return i2066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2069 = data
  i2068.center = new pc.Vec3( i2069[0], i2069[1], i2069[2] )
  i2068.size = new pc.Vec3( i2069[3], i2069[4], i2069[5] )
  i2068.enabled = !!i2069[6]
  i2068.isTrigger = !!i2069[7]
  request.r(i2069[8], i2069[9], 0, i2068, 'material')
  return i2068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2071 = data
  i2070.name = i2071[0]
  i2070.tagId = i2071[1]
  i2070.enabled = !!i2071[2]
  i2070.isStatic = !!i2071[3]
  i2070.layer = i2071[4]
  return i2070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2073 = data
  i2072.name = i2073[0]
  i2072.halfPrecision = !!i2073[1]
  i2072.useUInt32IndexFormat = !!i2073[2]
  i2072.vertexCount = i2073[3]
  i2072.aabb = i2073[4]
  var i2075 = i2073[5]
  var i2074 = []
  for(var i = 0; i < i2075.length; i += 1) {
    i2074.push( !!i2075[i + 0] );
  }
  i2072.streams = i2074
  i2072.vertices = i2073[6]
  var i2077 = i2073[7]
  var i2076 = []
  for(var i = 0; i < i2077.length; i += 1) {
    i2076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2077[i + 0]) );
  }
  i2072.subMeshes = i2076
  var i2079 = i2073[8]
  var i2078 = []
  for(var i = 0; i < i2079.length; i += 16) {
    i2078.push( new pc.Mat4().setData(i2079[i + 0], i2079[i + 1], i2079[i + 2], i2079[i + 3],  i2079[i + 4], i2079[i + 5], i2079[i + 6], i2079[i + 7],  i2079[i + 8], i2079[i + 9], i2079[i + 10], i2079[i + 11],  i2079[i + 12], i2079[i + 13], i2079[i + 14], i2079[i + 15]) );
  }
  i2072.bindposes = i2078
  var i2081 = i2073[9]
  var i2080 = []
  for(var i = 0; i < i2081.length; i += 1) {
    i2080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2081[i + 0]) );
  }
  i2072.blendShapes = i2080
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2087 = data
  i2086.triangles = i2087[0]
  return i2086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2093 = data
  i2092.name = i2093[0]
  var i2095 = i2093[1]
  var i2094 = []
  for(var i = 0; i < i2095.length; i += 1) {
    i2094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2095[i + 0]) );
  }
  i2092.frames = i2094
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2096 = root || new pc.UnityMaterial()
  var i2097 = data
  i2096.name = i2097[0]
  request.r(i2097[1], i2097[2], 0, i2096, 'shader')
  i2096.renderQueue = i2097[3]
  i2096.enableInstancing = !!i2097[4]
  var i2099 = i2097[5]
  var i2098 = []
  for(var i = 0; i < i2099.length; i += 1) {
    i2098.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2099[i + 0]) );
  }
  i2096.floatParameters = i2098
  var i2101 = i2097[6]
  var i2100 = []
  for(var i = 0; i < i2101.length; i += 1) {
    i2100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2101[i + 0]) );
  }
  i2096.colorParameters = i2100
  var i2103 = i2097[7]
  var i2102 = []
  for(var i = 0; i < i2103.length; i += 1) {
    i2102.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2103[i + 0]) );
  }
  i2096.vectorParameters = i2102
  var i2105 = i2097[8]
  var i2104 = []
  for(var i = 0; i < i2105.length; i += 1) {
    i2104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2105[i + 0]) );
  }
  i2096.textureParameters = i2104
  var i2107 = i2097[9]
  var i2106 = []
  for(var i = 0; i < i2107.length; i += 1) {
    i2106.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2107[i + 0]) );
  }
  i2096.materialFlags = i2106
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2111 = data
  i2110.name = i2111[0]
  i2110.value = i2111[1]
  return i2110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2115 = data
  i2114.name = i2115[0]
  i2114.value = new pc.Color(i2115[1], i2115[2], i2115[3], i2115[4])
  return i2114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2119 = data
  i2118.name = i2119[0]
  i2118.value = new pc.Vec4( i2119[1], i2119[2], i2119[3], i2119[4] )
  return i2118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2123 = data
  i2122.name = i2123[0]
  request.r(i2123[1], i2123[2], 0, i2122, 'value')
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2127 = data
  i2126.name = i2127[0]
  i2126.enabled = !!i2127[1]
  return i2126
}

Deserializers["Goods"] = function (request, data, root) {
  var i2128 = root || request.c( 'Goods' )
  var i2129 = data
  var i2131 = i2129[0]
  var i2130 = []
  for(var i = 0; i < i2131.length; i += 2) {
  request.r(i2131[i + 0], i2131[i + 1], 2, i2130, '')
  }
  i2128.materials = i2130
  i2128.goodsGroupIndex = i2129[1]
  request.r(i2129[2], i2129[3], 0, i2128, 'boxplaced')
  request.r(i2129[4], i2129[5], 0, i2128, 'origianalParent')
  return i2128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2133 = data
  i2132.name = i2133[0]
  i2132.width = i2133[1]
  i2132.height = i2133[2]
  i2132.mipmapCount = i2133[3]
  i2132.anisoLevel = i2133[4]
  i2132.filterMode = i2133[5]
  i2132.hdr = !!i2133[6]
  i2132.format = i2133[7]
  i2132.wrapMode = i2133[8]
  i2132.alphaIsTransparency = !!i2133[9]
  i2132.alphaSource = i2133[10]
  i2132.graphicsFormat = i2133[11]
  i2132.sRGBTexture = !!i2133[12]
  i2132.desiredColorSpace = i2133[13]
  i2132.wrapU = i2133[14]
  i2132.wrapV = i2133[15]
  return i2132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2135 = data
  i2134.pivot = new pc.Vec2( i2135[0], i2135[1] )
  i2134.anchorMin = new pc.Vec2( i2135[2], i2135[3] )
  i2134.anchorMax = new pc.Vec2( i2135[4], i2135[5] )
  i2134.sizeDelta = new pc.Vec2( i2135[6], i2135[7] )
  i2134.anchoredPosition3D = new pc.Vec3( i2135[8], i2135[9], i2135[10] )
  i2134.rotation = new pc.Quat(i2135[11], i2135[12], i2135[13], i2135[14])
  i2134.scale = new pc.Vec3( i2135[15], i2135[16], i2135[17] )
  return i2134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2137 = data
  i2136.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2137[0], i2136.main)
  i2136.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2137[1], i2136.colorBySpeed)
  i2136.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2137[2], i2136.colorOverLifetime)
  i2136.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2137[3], i2136.emission)
  i2136.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2137[4], i2136.rotationBySpeed)
  i2136.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2137[5], i2136.rotationOverLifetime)
  i2136.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2137[6], i2136.shape)
  i2136.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2137[7], i2136.sizeBySpeed)
  i2136.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2137[8], i2136.sizeOverLifetime)
  i2136.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2137[9], i2136.textureSheetAnimation)
  i2136.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2137[10], i2136.velocityOverLifetime)
  i2136.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2137[11], i2136.noise)
  i2136.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2137[12], i2136.inheritVelocity)
  i2136.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2137[13], i2136.forceOverLifetime)
  i2136.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2137[14], i2136.limitVelocityOverLifetime)
  i2136.useAutoRandomSeed = !!i2137[15]
  i2136.randomSeed = i2137[16]
  return i2136
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2138 = root || new pc.ParticleSystemMain()
  var i2139 = data
  i2138.duration = i2139[0]
  i2138.loop = !!i2139[1]
  i2138.prewarm = !!i2139[2]
  i2138.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2139[3], i2138.startDelay)
  i2138.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2139[4], i2138.startLifetime)
  i2138.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2139[5], i2138.startSpeed)
  i2138.startSize3D = !!i2139[6]
  i2138.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2139[7], i2138.startSizeX)
  i2138.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2139[8], i2138.startSizeY)
  i2138.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2139[9], i2138.startSizeZ)
  i2138.startRotation3D = !!i2139[10]
  i2138.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2139[11], i2138.startRotationX)
  i2138.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2139[12], i2138.startRotationY)
  i2138.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2139[13], i2138.startRotationZ)
  i2138.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2139[14], i2138.startColor)
  i2138.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2139[15], i2138.gravityModifier)
  i2138.simulationSpace = i2139[16]
  request.r(i2139[17], i2139[18], 0, i2138, 'customSimulationSpace')
  i2138.simulationSpeed = i2139[19]
  i2138.useUnscaledTime = !!i2139[20]
  i2138.scalingMode = i2139[21]
  i2138.playOnAwake = !!i2139[22]
  i2138.maxParticles = i2139[23]
  i2138.emitterVelocityMode = i2139[24]
  i2138.stopAction = i2139[25]
  return i2138
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2140 = root || new pc.MinMaxCurve()
  var i2141 = data
  i2140.mode = i2141[0]
  i2140.curveMin = new pc.AnimationCurve( { keys_flow: i2141[1] } )
  i2140.curveMax = new pc.AnimationCurve( { keys_flow: i2141[2] } )
  i2140.curveMultiplier = i2141[3]
  i2140.constantMin = i2141[4]
  i2140.constantMax = i2141[5]
  return i2140
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2142 = root || new pc.MinMaxGradient()
  var i2143 = data
  i2142.mode = i2143[0]
  i2142.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2143[1], i2142.gradientMin)
  i2142.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2143[2], i2142.gradientMax)
  i2142.colorMin = new pc.Color(i2143[3], i2143[4], i2143[5], i2143[6])
  i2142.colorMax = new pc.Color(i2143[7], i2143[8], i2143[9], i2143[10])
  return i2142
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2145 = data
  i2144.mode = i2145[0]
  var i2147 = i2145[1]
  var i2146 = []
  for(var i = 0; i < i2147.length; i += 1) {
    i2146.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2147[i + 0]) );
  }
  i2144.colorKeys = i2146
  var i2149 = i2145[2]
  var i2148 = []
  for(var i = 0; i < i2149.length; i += 1) {
    i2148.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2149[i + 0]) );
  }
  i2144.alphaKeys = i2148
  return i2144
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2150 = root || new pc.ParticleSystemColorBySpeed()
  var i2151 = data
  i2150.enabled = !!i2151[0]
  i2150.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2151[1], i2150.color)
  i2150.range = new pc.Vec2( i2151[2], i2151[3] )
  return i2150
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2155 = data
  i2154.color = new pc.Color(i2155[0], i2155[1], i2155[2], i2155[3])
  i2154.time = i2155[4]
  return i2154
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2159 = data
  i2158.alpha = i2159[0]
  i2158.time = i2159[1]
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2160 = root || new pc.ParticleSystemColorOverLifetime()
  var i2161 = data
  i2160.enabled = !!i2161[0]
  i2160.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2161[1], i2160.color)
  return i2160
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2162 = root || new pc.ParticleSystemEmitter()
  var i2163 = data
  i2162.enabled = !!i2163[0]
  i2162.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2163[1], i2162.rateOverTime)
  i2162.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2163[2], i2162.rateOverDistance)
  var i2165 = i2163[3]
  var i2164 = []
  for(var i = 0; i < i2165.length; i += 1) {
    i2164.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2165[i + 0]) );
  }
  i2162.bursts = i2164
  return i2162
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2168 = root || new pc.ParticleSystemBurst()
  var i2169 = data
  i2168.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2169[0], i2168.count)
  i2168.cycleCount = i2169[1]
  i2168.minCount = i2169[2]
  i2168.maxCount = i2169[3]
  i2168.repeatInterval = i2169[4]
  i2168.time = i2169[5]
  return i2168
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2170 = root || new pc.ParticleSystemRotationBySpeed()
  var i2171 = data
  i2170.enabled = !!i2171[0]
  i2170.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2171[1], i2170.x)
  i2170.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2171[2], i2170.y)
  i2170.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2171[3], i2170.z)
  i2170.separateAxes = !!i2171[4]
  i2170.range = new pc.Vec2( i2171[5], i2171[6] )
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2172 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2173 = data
  i2172.enabled = !!i2173[0]
  i2172.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[1], i2172.x)
  i2172.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[2], i2172.y)
  i2172.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[3], i2172.z)
  i2172.separateAxes = !!i2173[4]
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2174 = root || new pc.ParticleSystemShape()
  var i2175 = data
  i2174.enabled = !!i2175[0]
  i2174.shapeType = i2175[1]
  i2174.randomDirectionAmount = i2175[2]
  i2174.sphericalDirectionAmount = i2175[3]
  i2174.randomPositionAmount = i2175[4]
  i2174.alignToDirection = !!i2175[5]
  i2174.radius = i2175[6]
  i2174.radiusMode = i2175[7]
  i2174.radiusSpread = i2175[8]
  i2174.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2175[9], i2174.radiusSpeed)
  i2174.radiusThickness = i2175[10]
  i2174.angle = i2175[11]
  i2174.length = i2175[12]
  i2174.boxThickness = new pc.Vec3( i2175[13], i2175[14], i2175[15] )
  i2174.meshShapeType = i2175[16]
  request.r(i2175[17], i2175[18], 0, i2174, 'mesh')
  request.r(i2175[19], i2175[20], 0, i2174, 'meshRenderer')
  request.r(i2175[21], i2175[22], 0, i2174, 'skinnedMeshRenderer')
  i2174.useMeshMaterialIndex = !!i2175[23]
  i2174.meshMaterialIndex = i2175[24]
  i2174.useMeshColors = !!i2175[25]
  i2174.normalOffset = i2175[26]
  i2174.arc = i2175[27]
  i2174.arcMode = i2175[28]
  i2174.arcSpread = i2175[29]
  i2174.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2175[30], i2174.arcSpeed)
  i2174.donutRadius = i2175[31]
  i2174.position = new pc.Vec3( i2175[32], i2175[33], i2175[34] )
  i2174.rotation = new pc.Vec3( i2175[35], i2175[36], i2175[37] )
  i2174.scale = new pc.Vec3( i2175[38], i2175[39], i2175[40] )
  return i2174
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2176 = root || new pc.ParticleSystemSizeBySpeed()
  var i2177 = data
  i2176.enabled = !!i2177[0]
  i2176.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2177[1], i2176.x)
  i2176.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2177[2], i2176.y)
  i2176.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2177[3], i2176.z)
  i2176.separateAxes = !!i2177[4]
  i2176.range = new pc.Vec2( i2177[5], i2177[6] )
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2178 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2179 = data
  i2178.enabled = !!i2179[0]
  i2178.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2179[1], i2178.x)
  i2178.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2179[2], i2178.y)
  i2178.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2179[3], i2178.z)
  i2178.separateAxes = !!i2179[4]
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2180 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2181 = data
  i2180.enabled = !!i2181[0]
  i2180.mode = i2181[1]
  i2180.animation = i2181[2]
  i2180.numTilesX = i2181[3]
  i2180.numTilesY = i2181[4]
  i2180.useRandomRow = !!i2181[5]
  i2180.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2181[6], i2180.frameOverTime)
  i2180.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2181[7], i2180.startFrame)
  i2180.cycleCount = i2181[8]
  i2180.rowIndex = i2181[9]
  i2180.flipU = i2181[10]
  i2180.flipV = i2181[11]
  i2180.spriteCount = i2181[12]
  var i2183 = i2181[13]
  var i2182 = []
  for(var i = 0; i < i2183.length; i += 2) {
  request.r(i2183[i + 0], i2183[i + 1], 2, i2182, '')
  }
  i2180.sprites = i2182
  return i2180
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2186 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2187 = data
  i2186.enabled = !!i2187[0]
  i2186.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2187[1], i2186.x)
  i2186.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2187[2], i2186.y)
  i2186.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2187[3], i2186.z)
  i2186.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2187[4], i2186.radial)
  i2186.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2187[5], i2186.speedModifier)
  i2186.space = i2187[6]
  i2186.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2187[7], i2186.orbitalX)
  i2186.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2187[8], i2186.orbitalY)
  i2186.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2187[9], i2186.orbitalZ)
  i2186.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2187[10], i2186.orbitalOffsetX)
  i2186.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2187[11], i2186.orbitalOffsetY)
  i2186.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2187[12], i2186.orbitalOffsetZ)
  return i2186
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2188 = root || new pc.ParticleSystemNoise()
  var i2189 = data
  i2188.enabled = !!i2189[0]
  i2188.separateAxes = !!i2189[1]
  i2188.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2189[2], i2188.strengthX)
  i2188.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2189[3], i2188.strengthY)
  i2188.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2189[4], i2188.strengthZ)
  i2188.frequency = i2189[5]
  i2188.damping = !!i2189[6]
  i2188.octaveCount = i2189[7]
  i2188.octaveMultiplier = i2189[8]
  i2188.octaveScale = i2189[9]
  i2188.quality = i2189[10]
  i2188.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2189[11], i2188.scrollSpeed)
  i2188.scrollSpeedMultiplier = i2189[12]
  i2188.remapEnabled = !!i2189[13]
  i2188.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2189[14], i2188.remapX)
  i2188.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2189[15], i2188.remapY)
  i2188.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2189[16], i2188.remapZ)
  i2188.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2189[17], i2188.positionAmount)
  i2188.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2189[18], i2188.rotationAmount)
  i2188.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2189[19], i2188.sizeAmount)
  return i2188
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2190 = root || new pc.ParticleSystemInheritVelocity()
  var i2191 = data
  i2190.enabled = !!i2191[0]
  i2190.mode = i2191[1]
  i2190.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2191[2], i2190.curve)
  return i2190
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2192 = root || new pc.ParticleSystemForceOverLifetime()
  var i2193 = data
  i2192.enabled = !!i2193[0]
  i2192.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2193[1], i2192.x)
  i2192.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2193[2], i2192.y)
  i2192.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2193[3], i2192.z)
  i2192.space = i2193[4]
  i2192.randomized = !!i2193[5]
  return i2192
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2194 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2195 = data
  i2194.enabled = !!i2195[0]
  i2194.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2195[1], i2194.limit)
  i2194.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2195[2], i2194.limitX)
  i2194.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2195[3], i2194.limitY)
  i2194.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2195[4], i2194.limitZ)
  i2194.dampen = i2195[5]
  i2194.separateAxes = !!i2195[6]
  i2194.space = i2195[7]
  i2194.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2195[8], i2194.drag)
  i2194.multiplyDragByParticleSize = !!i2195[9]
  i2194.multiplyDragByParticleVelocity = !!i2195[10]
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2197 = data
  i2196.enabled = !!i2197[0]
  request.r(i2197[1], i2197[2], 0, i2196, 'sharedMaterial')
  var i2199 = i2197[3]
  var i2198 = []
  for(var i = 0; i < i2199.length; i += 2) {
  request.r(i2199[i + 0], i2199[i + 1], 2, i2198, '')
  }
  i2196.sharedMaterials = i2198
  i2196.receiveShadows = !!i2197[4]
  i2196.shadowCastingMode = i2197[5]
  i2196.sortingLayerID = i2197[6]
  i2196.sortingOrder = i2197[7]
  i2196.lightmapIndex = i2197[8]
  i2196.lightmapSceneIndex = i2197[9]
  i2196.lightmapScaleOffset = new pc.Vec4( i2197[10], i2197[11], i2197[12], i2197[13] )
  i2196.lightProbeUsage = i2197[14]
  i2196.reflectionProbeUsage = i2197[15]
  request.r(i2197[16], i2197[17], 0, i2196, 'mesh')
  i2196.meshCount = i2197[18]
  i2196.activeVertexStreamsCount = i2197[19]
  i2196.alignment = i2197[20]
  i2196.renderMode = i2197[21]
  i2196.sortMode = i2197[22]
  i2196.lengthScale = i2197[23]
  i2196.velocityScale = i2197[24]
  i2196.cameraVelocityScale = i2197[25]
  i2196.normalDirection = i2197[26]
  i2196.sortingFudge = i2197[27]
  i2196.minParticleSize = i2197[28]
  i2196.maxParticleSize = i2197[29]
  i2196.pivot = new pc.Vec3( i2197[30], i2197[31], i2197[32] )
  request.r(i2197[33], i2197[34], 0, i2196, 'trailMaterial')
  return i2196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2201 = data
  i2200.cullTransparentMesh = !!i2201[0]
  return i2200
}

Deserializers["UnityEngine.UI.Extensions.CasualGame.UIParticleSystem"] = function (request, data, root) {
  var i2202 = root || request.c( 'UnityEngine.UI.Extensions.CasualGame.UIParticleSystem' )
  var i2203 = data
  i2202.fixedTime = !!i2203[0]
  i2202.use3dRotation = !!i2203[1]
  request.r(i2203[2], i2203[3], 0, i2202, 'm_Material')
  i2202.m_Maskable = !!i2203[4]
  i2202.m_Color = new pc.Color(i2203[5], i2203[6], i2203[7], i2203[8])
  i2202.m_RaycastTarget = !!i2203[9]
  i2202.m_RaycastPadding = new pc.Vec4( i2203[10], i2203[11], i2203[12], i2203[13] )
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2205 = data
  i2204.name = i2205[0]
  i2204.atlasId = i2205[1]
  i2204.mipmapCount = i2205[2]
  i2204.hdr = !!i2205[3]
  i2204.size = i2205[4]
  i2204.anisoLevel = i2205[5]
  i2204.filterMode = i2205[6]
  var i2207 = i2205[7]
  var i2206 = []
  for(var i = 0; i < i2207.length; i += 4) {
    i2206.push( UnityEngine.Rect.MinMaxRect(i2207[i + 0], i2207[i + 1], i2207[i + 2], i2207[i + 3]) );
  }
  i2204.rects = i2206
  i2204.wrapU = i2205[8]
  i2204.wrapV = i2205[9]
  return i2204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2211 = data
  i2210.name = i2211[0]
  i2210.index = i2211[1]
  i2210.startup = !!i2211[2]
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2213 = data
  i2212.enabled = !!i2213[0]
  i2212.aspect = i2213[1]
  i2212.orthographic = !!i2213[2]
  i2212.orthographicSize = i2213[3]
  i2212.backgroundColor = new pc.Color(i2213[4], i2213[5], i2213[6], i2213[7])
  i2212.nearClipPlane = i2213[8]
  i2212.farClipPlane = i2213[9]
  i2212.fieldOfView = i2213[10]
  i2212.depth = i2213[11]
  i2212.clearFlags = i2213[12]
  i2212.cullingMask = i2213[13]
  i2212.rect = i2213[14]
  request.r(i2213[15], i2213[16], 0, i2212, 'targetTexture')
  i2212.usePhysicalProperties = !!i2213[17]
  i2212.focalLength = i2213[18]
  i2212.sensorSize = new pc.Vec2( i2213[19], i2213[20] )
  i2212.lensShift = new pc.Vec2( i2213[21], i2213[22] )
  i2212.gateFit = i2213[23]
  i2212.commandBufferCount = i2213[24]
  i2212.cameraType = i2213[25]
  return i2212
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i2214 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i2215 = data
  i2214.m_RenderShadows = !!i2215[0]
  i2214.m_RequiresDepthTextureOption = i2215[1]
  i2214.m_RequiresOpaqueTextureOption = i2215[2]
  i2214.m_CameraType = i2215[3]
  var i2217 = i2215[4]
  var i2216 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i2217.length; i += 2) {
  request.r(i2217[i + 0], i2217[i + 1], 1, i2216, '')
  }
  i2214.m_Cameras = i2216
  i2214.m_RendererIndex = i2215[5]
  i2214.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2215[6] )
  request.r(i2215[7], i2215[8], 0, i2214, 'm_VolumeTrigger')
  i2214.m_VolumeFrameworkUpdateModeOption = i2215[9]
  i2214.m_RenderPostProcessing = !!i2215[10]
  i2214.m_Antialiasing = i2215[11]
  i2214.m_AntialiasingQuality = i2215[12]
  i2214.m_StopNaN = !!i2215[13]
  i2214.m_Dithering = !!i2215[14]
  i2214.m_ClearDepth = !!i2215[15]
  i2214.m_AllowXRRendering = !!i2215[16]
  i2214.m_AllowHDROutput = !!i2215[17]
  i2214.m_UseScreenCoordOverride = !!i2215[18]
  i2214.m_ScreenSizeOverride = new pc.Vec4( i2215[19], i2215[20], i2215[21], i2215[22] )
  i2214.m_ScreenCoordScaleBias = new pc.Vec4( i2215[23], i2215[24], i2215[25], i2215[26] )
  i2214.m_RequiresDepthTexture = !!i2215[27]
  i2214.m_RequiresColorTexture = !!i2215[28]
  i2214.m_Version = i2215[29]
  i2214.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i2215[30], i2214.m_TaaSettings)
  return i2214
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i2220 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i2221 = data
  i2220.m_Quality = i2221[0]
  i2220.m_FrameInfluence = i2221[1]
  i2220.m_JitterScale = i2221[2]
  i2220.m_MipBias = i2221[3]
  i2220.m_VarianceClampScale = i2221[4]
  i2220.m_ContrastAdaptiveSharpening = i2221[5]
  return i2220
}

Deserializers["UnityEngine.EventSystems.PhysicsRaycaster"] = function (request, data, root) {
  var i2222 = root || request.c( 'UnityEngine.EventSystems.PhysicsRaycaster' )
  var i2223 = data
  i2222.m_EventMask = UnityEngine.LayerMask.FromIntegerValue( i2223[0] )
  i2222.m_MaxRayIntersections = i2223[1]
  return i2222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2225 = data
  i2224.enabled = !!i2225[0]
  i2224.type = i2225[1]
  i2224.color = new pc.Color(i2225[2], i2225[3], i2225[4], i2225[5])
  i2224.cullingMask = i2225[6]
  i2224.intensity = i2225[7]
  i2224.range = i2225[8]
  i2224.spotAngle = i2225[9]
  i2224.shadows = i2225[10]
  i2224.shadowNormalBias = i2225[11]
  i2224.shadowBias = i2225[12]
  i2224.shadowStrength = i2225[13]
  i2224.shadowResolution = i2225[14]
  i2224.lightmapBakeType = i2225[15]
  i2224.renderMode = i2225[16]
  request.r(i2225[17], i2225[18], 0, i2224, 'cookie')
  i2224.cookieSize = i2225[19]
  return i2224
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i2226 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i2227 = data
  i2226.m_Version = i2227[0]
  i2226.m_UsePipelineSettings = !!i2227[1]
  i2226.m_AdditionalLightsShadowResolutionTier = i2227[2]
  i2226.m_LightLayerMask = i2227[3]
  i2226.m_RenderingLayers = i2227[4]
  i2226.m_CustomShadowLayers = !!i2227[5]
  i2226.m_ShadowLayerMask = i2227[6]
  i2226.m_ShadowRenderingLayers = i2227[7]
  i2226.m_LightCookieSize = new pc.Vec2( i2227[8], i2227[9] )
  i2226.m_LightCookieOffset = new pc.Vec2( i2227[10], i2227[11] )
  i2226.m_SoftShadowQuality = i2227[12]
  return i2226
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2228 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2229 = data
  request.r(i2229[0], i2229[1], 0, i2228, 'm_FirstSelected')
  i2228.m_sendNavigationEvents = !!i2229[2]
  i2228.m_DragThreshold = i2229[3]
  return i2228
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2230 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2231 = data
  i2230.m_HorizontalAxis = i2231[0]
  i2230.m_VerticalAxis = i2231[1]
  i2230.m_SubmitButton = i2231[2]
  i2230.m_CancelButton = i2231[3]
  i2230.m_InputActionsPerSecond = i2231[4]
  i2230.m_RepeatDelay = i2231[5]
  i2230.m_ForceModuleActive = !!i2231[6]
  i2230.m_SendPointerHoverToParent = !!i2231[7]
  return i2230
}

Deserializers["GManager"] = function (request, data, root) {
  var i2232 = root || request.c( 'GManager' )
  var i2233 = data
  i2232.isStarted = !!i2233[0]
  request.r(i2233[1], i2233[2], 0, i2232, 'boxSetController')
  request.r(i2233[3], i2233[4], 0, i2232, 'particleController')
  i2232.goodsDistanceCamera = i2233[5]
  i2232.boxCount = i2233[6]
  i2232.timePlayed = i2233[7]
  request.r(i2233[8], i2233[9], 0, i2232, 'overlayText')
  request.r(i2233[10], i2233[11], 0, i2232, 'gameClear')
  request.r(i2233[12], i2233[13], 0, i2232, 'UICanvas')
  i2232.adShown = !!i2233[14]
  request.r(i2233[15], i2233[16], 0, i2232, 'startUI')
  request.r(i2233[17], i2233[18], 0, i2232, 'ads')
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2235 = data
  i2234.enabled = !!i2235[0]
  i2234.planeDistance = i2235[1]
  i2234.referencePixelsPerUnit = i2235[2]
  i2234.isFallbackOverlay = !!i2235[3]
  i2234.renderMode = i2235[4]
  i2234.renderOrder = i2235[5]
  i2234.sortingLayerName = i2235[6]
  i2234.sortingOrder = i2235[7]
  i2234.scaleFactor = i2235[8]
  request.r(i2235[9], i2235[10], 0, i2234, 'worldCamera')
  i2234.overrideSorting = !!i2235[11]
  i2234.pixelPerfect = !!i2235[12]
  i2234.targetDisplay = i2235[13]
  i2234.overridePixelPerfect = !!i2235[14]
  return i2234
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2236 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2237 = data
  i2236.m_UiScaleMode = i2237[0]
  i2236.m_ReferencePixelsPerUnit = i2237[1]
  i2236.m_ScaleFactor = i2237[2]
  i2236.m_ReferenceResolution = new pc.Vec2( i2237[3], i2237[4] )
  i2236.m_ScreenMatchMode = i2237[5]
  i2236.m_MatchWidthOrHeight = i2237[6]
  i2236.m_PhysicalUnit = i2237[7]
  i2236.m_FallbackScreenDPI = i2237[8]
  i2236.m_DefaultSpriteDPI = i2237[9]
  i2236.m_DynamicPixelsPerUnit = i2237[10]
  i2236.m_PresetInfoIsWorld = !!i2237[11]
  return i2236
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2238 = root || request.c( 'UnityEngine.UI.Image' )
  var i2239 = data
  request.r(i2239[0], i2239[1], 0, i2238, 'm_Sprite')
  i2238.m_Type = i2239[2]
  i2238.m_PreserveAspect = !!i2239[3]
  i2238.m_FillCenter = !!i2239[4]
  i2238.m_FillMethod = i2239[5]
  i2238.m_FillAmount = i2239[6]
  i2238.m_FillClockwise = !!i2239[7]
  i2238.m_FillOrigin = i2239[8]
  i2238.m_UseSpriteMesh = !!i2239[9]
  i2238.m_PixelsPerUnitMultiplier = i2239[10]
  request.r(i2239[11], i2239[12], 0, i2238, 'm_Material')
  i2238.m_Maskable = !!i2239[13]
  i2238.m_Color = new pc.Color(i2239[14], i2239[15], i2239[16], i2239[17])
  i2238.m_RaycastTarget = !!i2239[18]
  i2238.m_RaycastPadding = new pc.Vec4( i2239[19], i2239[20], i2239[21], i2239[22] )
  return i2238
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2240 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2241 = data
  i2240.m_IgnoreReversedGraphics = !!i2241[0]
  i2240.m_BlockingObjects = i2241[1]
  i2240.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2241[2] )
  return i2240
}

Deserializers["Advertise"] = function (request, data, root) {
  var i2242 = root || request.c( 'Advertise' )
  var i2243 = data
  request.r(i2243[0], i2243[1], 0, i2242, 'playNowUI')
  i2242.scaleAmount = i2243[2]
  i2242.scaleDuration = i2243[3]
  return i2242
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2244 = root || request.c( 'UnityEngine.UI.Button' )
  var i2245 = data
  i2244.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2245[0], i2244.m_OnClick)
  i2244.m_Navigation = request.d('UnityEngine.UI.Navigation', i2245[1], i2244.m_Navigation)
  i2244.m_Transition = i2245[2]
  i2244.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2245[3], i2244.m_Colors)
  i2244.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2245[4], i2244.m_SpriteState)
  i2244.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2245[5], i2244.m_AnimationTriggers)
  i2244.m_Interactable = !!i2245[6]
  request.r(i2245[7], i2245[8], 0, i2244, 'm_TargetGraphic')
  return i2244
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2246 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2247 = data
  i2246.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2247[0], i2246.m_PersistentCalls)
  return i2246
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2248 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2249 = data
  var i2251 = i2249[0]
  var i2250 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2251.length; i += 1) {
    i2250.add(request.d('UnityEngine.Events.PersistentCall', i2251[i + 0]));
  }
  i2248.m_Calls = i2250
  return i2248
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2254 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2255 = data
  request.r(i2255[0], i2255[1], 0, i2254, 'm_Target')
  i2254.m_TargetAssemblyTypeName = i2255[2]
  i2254.m_MethodName = i2255[3]
  i2254.m_Mode = i2255[4]
  i2254.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2255[5], i2254.m_Arguments)
  i2254.m_CallState = i2255[6]
  return i2254
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2256 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2257 = data
  request.r(i2257[0], i2257[1], 0, i2256, 'm_ObjectArgument')
  i2256.m_ObjectArgumentAssemblyTypeName = i2257[2]
  i2256.m_IntArgument = i2257[3]
  i2256.m_FloatArgument = i2257[4]
  i2256.m_StringArgument = i2257[5]
  i2256.m_BoolArgument = !!i2257[6]
  return i2256
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2258 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2259 = data
  i2258.m_Mode = i2259[0]
  i2258.m_WrapAround = !!i2259[1]
  request.r(i2259[2], i2259[3], 0, i2258, 'm_SelectOnUp')
  request.r(i2259[4], i2259[5], 0, i2258, 'm_SelectOnDown')
  request.r(i2259[6], i2259[7], 0, i2258, 'm_SelectOnLeft')
  request.r(i2259[8], i2259[9], 0, i2258, 'm_SelectOnRight')
  return i2258
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2260 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2261 = data
  i2260.m_NormalColor = new pc.Color(i2261[0], i2261[1], i2261[2], i2261[3])
  i2260.m_HighlightedColor = new pc.Color(i2261[4], i2261[5], i2261[6], i2261[7])
  i2260.m_PressedColor = new pc.Color(i2261[8], i2261[9], i2261[10], i2261[11])
  i2260.m_SelectedColor = new pc.Color(i2261[12], i2261[13], i2261[14], i2261[15])
  i2260.m_DisabledColor = new pc.Color(i2261[16], i2261[17], i2261[18], i2261[19])
  i2260.m_ColorMultiplier = i2261[20]
  i2260.m_FadeDuration = i2261[21]
  return i2260
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2262 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2263 = data
  request.r(i2263[0], i2263[1], 0, i2262, 'm_HighlightedSprite')
  request.r(i2263[2], i2263[3], 0, i2262, 'm_PressedSprite')
  request.r(i2263[4], i2263[5], 0, i2262, 'm_SelectedSprite')
  request.r(i2263[6], i2263[7], 0, i2262, 'm_DisabledSprite')
  return i2262
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2264 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2265 = data
  i2264.m_NormalTrigger = i2265[0]
  i2264.m_HighlightedTrigger = i2265[1]
  i2264.m_PressedTrigger = i2265[2]
  i2264.m_SelectedTrigger = i2265[3]
  i2264.m_DisabledTrigger = i2265[4]
  return i2264
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2266 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2267 = data
  i2266.m_hasFontAssetChanged = !!i2267[0]
  request.r(i2267[1], i2267[2], 0, i2266, 'm_baseMaterial')
  i2266.m_maskOffset = new pc.Vec4( i2267[3], i2267[4], i2267[5], i2267[6] )
  i2266.m_text = i2267[7]
  i2266.m_isRightToLeft = !!i2267[8]
  request.r(i2267[9], i2267[10], 0, i2266, 'm_fontAsset')
  request.r(i2267[11], i2267[12], 0, i2266, 'm_sharedMaterial')
  var i2269 = i2267[13]
  var i2268 = []
  for(var i = 0; i < i2269.length; i += 2) {
  request.r(i2269[i + 0], i2269[i + 1], 2, i2268, '')
  }
  i2266.m_fontSharedMaterials = i2268
  request.r(i2267[14], i2267[15], 0, i2266, 'm_fontMaterial')
  var i2271 = i2267[16]
  var i2270 = []
  for(var i = 0; i < i2271.length; i += 2) {
  request.r(i2271[i + 0], i2271[i + 1], 2, i2270, '')
  }
  i2266.m_fontMaterials = i2270
  i2266.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2267[17], i2267[18], i2267[19], i2267[20])
  i2266.m_fontColor = new pc.Color(i2267[21], i2267[22], i2267[23], i2267[24])
  i2266.m_enableVertexGradient = !!i2267[25]
  i2266.m_colorMode = i2267[26]
  i2266.m_fontColorGradient = request.d('TMPro.VertexGradient', i2267[27], i2266.m_fontColorGradient)
  request.r(i2267[28], i2267[29], 0, i2266, 'm_fontColorGradientPreset')
  request.r(i2267[30], i2267[31], 0, i2266, 'm_spriteAsset')
  i2266.m_tintAllSprites = !!i2267[32]
  request.r(i2267[33], i2267[34], 0, i2266, 'm_StyleSheet')
  i2266.m_TextStyleHashCode = i2267[35]
  i2266.m_overrideHtmlColors = !!i2267[36]
  i2266.m_faceColor = UnityEngine.Color32.ConstructColor(i2267[37], i2267[38], i2267[39], i2267[40])
  i2266.m_fontSize = i2267[41]
  i2266.m_fontSizeBase = i2267[42]
  i2266.m_fontWeight = i2267[43]
  i2266.m_enableAutoSizing = !!i2267[44]
  i2266.m_fontSizeMin = i2267[45]
  i2266.m_fontSizeMax = i2267[46]
  i2266.m_fontStyle = i2267[47]
  i2266.m_HorizontalAlignment = i2267[48]
  i2266.m_VerticalAlignment = i2267[49]
  i2266.m_textAlignment = i2267[50]
  i2266.m_characterSpacing = i2267[51]
  i2266.m_wordSpacing = i2267[52]
  i2266.m_lineSpacing = i2267[53]
  i2266.m_lineSpacingMax = i2267[54]
  i2266.m_paragraphSpacing = i2267[55]
  i2266.m_charWidthMaxAdj = i2267[56]
  i2266.m_enableWordWrapping = !!i2267[57]
  i2266.m_wordWrappingRatios = i2267[58]
  i2266.m_overflowMode = i2267[59]
  request.r(i2267[60], i2267[61], 0, i2266, 'm_linkedTextComponent')
  request.r(i2267[62], i2267[63], 0, i2266, 'parentLinkedComponent')
  i2266.m_enableKerning = !!i2267[64]
  i2266.m_enableExtraPadding = !!i2267[65]
  i2266.checkPaddingRequired = !!i2267[66]
  i2266.m_isRichText = !!i2267[67]
  i2266.m_parseCtrlCharacters = !!i2267[68]
  i2266.m_isOrthographic = !!i2267[69]
  i2266.m_isCullingEnabled = !!i2267[70]
  i2266.m_horizontalMapping = i2267[71]
  i2266.m_verticalMapping = i2267[72]
  i2266.m_uvLineOffset = i2267[73]
  i2266.m_geometrySortingOrder = i2267[74]
  i2266.m_IsTextObjectScaleStatic = !!i2267[75]
  i2266.m_VertexBufferAutoSizeReduction = !!i2267[76]
  i2266.m_useMaxVisibleDescender = !!i2267[77]
  i2266.m_pageToDisplay = i2267[78]
  i2266.m_margin = new pc.Vec4( i2267[79], i2267[80], i2267[81], i2267[82] )
  i2266.m_isUsingLegacyAnimationComponent = !!i2267[83]
  i2266.m_isVolumetricText = !!i2267[84]
  request.r(i2267[85], i2267[86], 0, i2266, 'm_Material')
  i2266.m_Maskable = !!i2267[87]
  i2266.m_Color = new pc.Color(i2267[88], i2267[89], i2267[90], i2267[91])
  i2266.m_RaycastTarget = !!i2267[92]
  i2266.m_RaycastPadding = new pc.Vec4( i2267[93], i2267[94], i2267[95], i2267[96] )
  return i2266
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2272 = root || request.c( 'TMPro.VertexGradient' )
  var i2273 = data
  i2272.topLeft = new pc.Color(i2273[0], i2273[1], i2273[2], i2273[3])
  i2272.topRight = new pc.Color(i2273[4], i2273[5], i2273[6], i2273[7])
  i2272.bottomLeft = new pc.Color(i2273[8], i2273[9], i2273[10], i2273[11])
  i2272.bottomRight = new pc.Color(i2273[12], i2273[13], i2273[14], i2273[15])
  return i2272
}

Deserializers["GameClearUI"] = function (request, data, root) {
  var i2274 = root || request.c( 'GameClearUI' )
  var i2275 = data
  request.r(i2275[0], i2275[1], 0, i2274, 'clearTimeText')
  return i2274
}

Deserializers["UIDotweenUpDown"] = function (request, data, root) {
  var i2276 = root || request.c( 'UIDotweenUpDown' )
  var i2277 = data
  i2276.moveHeight = i2277[0]
  i2276.moveDuration = i2277[1]
  return i2276
}

Deserializers["ComboText"] = function (request, data, root) {
  var i2278 = root || request.c( 'ComboText' )
  var i2279 = data
  i2278.fadeDuration = i2279[0]
  return i2278
}

Deserializers["ParticleController"] = function (request, data, root) {
  var i2280 = root || request.c( 'ParticleController' )
  var i2281 = data
  request.r(i2281[0], i2281[1], 0, i2280, 'popParticlePrefab')
  return i2280
}

Deserializers["BoxSetController"] = function (request, data, root) {
  var i2282 = root || request.c( 'BoxSetController' )
  var i2283 = data
  i2282.lastGoodsMovedIndex = i2283[0]
  request.r(i2283[1], i2283[2], 0, i2282, 'boxPrefab')
  request.r(i2283[3], i2283[4], 0, i2282, 'goodsPrefab')
  var i2285 = i2283[5]
  var i2284 = new (System.Collections.Generic.List$1(Bridge.ns('Box')))
  for(var i = 0; i < i2285.length; i += 2) {
  request.r(i2285[i + 0], i2285[i + 1], 1, i2284, '')
  }
  i2282.boxList = i2284
  var i2287 = i2283[6]
  var i2286 = new (System.Collections.Generic.List$1(Bridge.ns('Goods')))
  for(var i = 0; i < i2287.length; i += 2) {
  request.r(i2287[i + 0], i2287[i + 1], 1, i2286, '')
  }
  i2282.allGoods = i2286
  i2282.xStart = i2283[7]
  i2282.xOffset = i2283[8]
  i2282.yOffset = i2283[9]
  var i2289 = i2283[10]
  var i2288 = []
  for(var i = 0; i < i2289.length; i += 2) {
  request.r(i2289[i + 0], i2289[i + 1], 2, i2288, '')
  }
  i2282.boxMaterials = i2288
  var i2291 = i2283[11]
  var i2290 = []
  for(var i = 0; i < i2291.length; i += 2) {
  request.r(i2291[i + 0], i2291[i + 1], 2, i2290, '')
  }
  i2282.goodsMaterials = i2290
  return i2282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2297 = data
  i2296.ambientIntensity = i2297[0]
  i2296.reflectionIntensity = i2297[1]
  i2296.ambientMode = i2297[2]
  i2296.ambientLight = new pc.Color(i2297[3], i2297[4], i2297[5], i2297[6])
  i2296.ambientSkyColor = new pc.Color(i2297[7], i2297[8], i2297[9], i2297[10])
  i2296.ambientGroundColor = new pc.Color(i2297[11], i2297[12], i2297[13], i2297[14])
  i2296.ambientEquatorColor = new pc.Color(i2297[15], i2297[16], i2297[17], i2297[18])
  i2296.fogColor = new pc.Color(i2297[19], i2297[20], i2297[21], i2297[22])
  i2296.fogEndDistance = i2297[23]
  i2296.fogStartDistance = i2297[24]
  i2296.fogDensity = i2297[25]
  i2296.fog = !!i2297[26]
  request.r(i2297[27], i2297[28], 0, i2296, 'skybox')
  i2296.fogMode = i2297[29]
  var i2299 = i2297[30]
  var i2298 = []
  for(var i = 0; i < i2299.length; i += 1) {
    i2298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2299[i + 0]) );
  }
  i2296.lightmaps = i2298
  i2296.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2297[31], i2296.lightProbes)
  i2296.lightmapsMode = i2297[32]
  i2296.mixedBakeMode = i2297[33]
  i2296.environmentLightingMode = i2297[34]
  i2296.ambientProbe = new pc.SphericalHarmonicsL2(i2297[35])
  i2296.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2297[36])
  i2296.useReferenceAmbientProbe = !!i2297[37]
  request.r(i2297[38], i2297[39], 0, i2296, 'customReflection')
  request.r(i2297[40], i2297[41], 0, i2296, 'defaultReflection')
  i2296.defaultReflectionMode = i2297[42]
  i2296.defaultReflectionResolution = i2297[43]
  i2296.sunLightObjectId = i2297[44]
  i2296.pixelLightCount = i2297[45]
  i2296.defaultReflectionHDR = !!i2297[46]
  i2296.hasLightDataAsset = !!i2297[47]
  i2296.hasManualGenerate = !!i2297[48]
  return i2296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2303 = data
  request.r(i2303[0], i2303[1], 0, i2302, 'lightmapColor')
  request.r(i2303[2], i2303[3], 0, i2302, 'lightmapDirection')
  return i2302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2304 = root || new UnityEngine.LightProbes()
  var i2305 = data
  return i2304
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i2312 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i2313 = data
  request.r(i2313[0], i2313[1], 0, i2312, 'panelPrefab')
  var i2315 = i2313[2]
  var i2314 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i2315.length; i += 1) {
    i2314.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i2315[i + 0]));
  }
  i2312.prefabs = i2314
  return i2312
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i2318 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i2319 = data
  i2318.type = i2319[0]
  request.r(i2319[1], i2319[2], 0, i2318, 'prefab')
  return i2318
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i2320 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i2321 = data
  i2320.m_Spacing = i2321[0]
  i2320.m_ChildForceExpandWidth = !!i2321[1]
  i2320.m_ChildForceExpandHeight = !!i2321[2]
  i2320.m_ChildControlWidth = !!i2321[3]
  i2320.m_ChildControlHeight = !!i2321[4]
  i2320.m_ChildScaleWidth = !!i2321[5]
  i2320.m_ChildScaleHeight = !!i2321[6]
  i2320.m_ReverseArrangement = !!i2321[7]
  i2320.m_Padding = UnityEngine.RectOffset.FromPaddings(i2321[8], i2321[9], i2321[10], i2321[11])
  i2320.m_ChildAlignment = i2321[12]
  return i2320
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i2322 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i2323 = data
  i2322.m_HorizontalFit = i2323[0]
  i2322.m_VerticalFit = i2323[1]
  return i2322
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i2324 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i2325 = data
  request.r(i2325[0], i2325[1], 0, i2324, 'contentHolder')
  return i2324
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i2326 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i2327 = data
  request.r(i2327[0], i2327[1], 0, i2326, 'nameLabel')
  request.r(i2327[2], i2327[3], 0, i2326, 'scrollRect')
  request.r(i2327[4], i2327[5], 0, i2326, 'viewport')
  request.r(i2327[6], i2327[7], 0, i2326, 'Canvas')
  return i2326
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i2328 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i2329 = data
  i2328.m_IgnoreLayout = !!i2329[0]
  i2328.m_MinWidth = i2329[1]
  i2328.m_MinHeight = i2329[2]
  i2328.m_PreferredWidth = i2329[3]
  i2328.m_PreferredHeight = i2329[4]
  i2328.m_FlexibleWidth = i2329[5]
  i2328.m_FlexibleHeight = i2329[6]
  i2328.m_LayoutPriority = i2329[7]
  return i2328
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2330 = root || request.c( 'UnityEngine.UI.Text' )
  var i2331 = data
  i2330.m_FontData = request.d('UnityEngine.UI.FontData', i2331[0], i2330.m_FontData)
  i2330.m_Text = i2331[1]
  request.r(i2331[2], i2331[3], 0, i2330, 'm_Material')
  i2330.m_Maskable = !!i2331[4]
  i2330.m_Color = new pc.Color(i2331[5], i2331[6], i2331[7], i2331[8])
  i2330.m_RaycastTarget = !!i2331[9]
  i2330.m_RaycastPadding = new pc.Vec4( i2331[10], i2331[11], i2331[12], i2331[13] )
  return i2330
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2332 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2333 = data
  request.r(i2333[0], i2333[1], 0, i2332, 'm_Font')
  i2332.m_FontSize = i2333[2]
  i2332.m_FontStyle = i2333[3]
  i2332.m_BestFit = !!i2333[4]
  i2332.m_MinSize = i2333[5]
  i2332.m_MaxSize = i2333[6]
  i2332.m_Alignment = i2333[7]
  i2332.m_AlignByGeometry = !!i2333[8]
  i2332.m_RichText = !!i2333[9]
  i2332.m_HorizontalOverflow = i2333[10]
  i2332.m_VerticalOverflow = i2333[11]
  i2332.m_LineSpacing = i2333[12]
  return i2332
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i2334 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i2335 = data
  request.r(i2335[0], i2335[1], 0, i2334, 'm_Content')
  i2334.m_Horizontal = !!i2335[2]
  i2334.m_Vertical = !!i2335[3]
  i2334.m_MovementType = i2335[4]
  i2334.m_Elasticity = i2335[5]
  i2334.m_Inertia = !!i2335[6]
  i2334.m_DecelerationRate = i2335[7]
  i2334.m_ScrollSensitivity = i2335[8]
  request.r(i2335[9], i2335[10], 0, i2334, 'm_Viewport')
  request.r(i2335[11], i2335[12], 0, i2334, 'm_HorizontalScrollbar')
  request.r(i2335[13], i2335[14], 0, i2334, 'm_VerticalScrollbar')
  i2334.m_HorizontalScrollbarVisibility = i2335[15]
  i2334.m_VerticalScrollbarVisibility = i2335[16]
  i2334.m_HorizontalScrollbarSpacing = i2335[17]
  i2334.m_VerticalScrollbarSpacing = i2335[18]
  i2334.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i2335[19], i2334.m_OnValueChanged)
  return i2334
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i2336 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i2337 = data
  i2336.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2337[0], i2336.m_PersistentCalls)
  return i2336
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2338 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2339 = data
  i2338.m_ShowMaskGraphic = !!i2339[0]
  return i2338
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i2340 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i2341 = data
  request.r(i2341[0], i2341[1], 0, i2340, 'm_HandleRect')
  i2340.m_Direction = i2341[2]
  i2340.m_Value = i2341[3]
  i2340.m_Size = i2341[4]
  i2340.m_NumberOfSteps = i2341[5]
  i2340.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i2341[6], i2340.m_OnValueChanged)
  i2340.m_Navigation = request.d('UnityEngine.UI.Navigation', i2341[7], i2340.m_Navigation)
  i2340.m_Transition = i2341[8]
  i2340.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2341[9], i2340.m_Colors)
  i2340.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2341[10], i2340.m_SpriteState)
  i2340.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2341[11], i2340.m_AnimationTriggers)
  i2340.m_Interactable = !!i2341[12]
  request.r(i2341[13], i2341[14], 0, i2340, 'm_TargetGraphic')
  return i2340
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i2342 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i2343 = data
  i2342.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2343[0], i2342.m_PersistentCalls)
  return i2342
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i2344 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i2345 = data
  var i2347 = i2345[0]
  var i2346 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i2347.length; i += 1) {
    i2346.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i2347[i + 0]));
  }
  i2344.m_Delegates = i2346
  return i2344
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i2350 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i2351 = data
  i2350.eventID = i2351[0]
  i2350.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i2351[1], i2350.callback)
  return i2350
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i2352 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i2353 = data
  i2352.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2353[0], i2352.m_PersistentCalls)
  return i2352
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i2354 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i2355 = data
  request.r(i2355[0], i2355[1], 0, i2354, 'nameLabel')
  request.r(i2355[2], i2355[3], 0, i2354, 'valueLabel')
  i2354.colorDefault = new pc.Color(i2355[4], i2355[5], i2355[6], i2355[7])
  i2354.colorSelected = new pc.Color(i2355[8], i2355[9], i2355[10], i2355[11])
  return i2354
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i2356 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i2357 = data
  request.r(i2357[0], i2357[1], 0, i2356, 'nameLabel')
  request.r(i2357[2], i2357[3], 0, i2356, 'valueToggle')
  request.r(i2357[4], i2357[5], 0, i2356, 'checkmarkImage')
  i2356.colorDefault = new pc.Color(i2357[6], i2357[7], i2357[8], i2357[9])
  i2356.colorSelected = new pc.Color(i2357[10], i2357[11], i2357[12], i2357[13])
  return i2356
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i2358 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i2359 = data
  i2358.toggleTransition = i2359[0]
  request.r(i2359[1], i2359[2], 0, i2358, 'graphic')
  i2358.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i2359[3], i2358.onValueChanged)
  request.r(i2359[4], i2359[5], 0, i2358, 'm_Group')
  i2358.m_IsOn = !!i2359[6]
  i2358.m_Navigation = request.d('UnityEngine.UI.Navigation', i2359[7], i2358.m_Navigation)
  i2358.m_Transition = i2359[8]
  i2358.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2359[9], i2358.m_Colors)
  i2358.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2359[10], i2358.m_SpriteState)
  i2358.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2359[11], i2358.m_AnimationTriggers)
  i2358.m_Interactable = !!i2359[12]
  request.r(i2359[13], i2359[14], 0, i2358, 'm_TargetGraphic')
  return i2358
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i2360 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i2361 = data
  i2360.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2361[0], i2360.m_PersistentCalls)
  return i2360
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i2362 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i2363 = data
  request.r(i2363[0], i2363[1], 0, i2362, 'nameLabel')
  request.r(i2363[2], i2363[3], 0, i2362, 'valueLabel')
  i2362.colorDefault = new pc.Color(i2363[4], i2363[5], i2363[6], i2363[7])
  i2362.colorSelected = new pc.Color(i2363[8], i2363[9], i2363[10], i2363[11])
  return i2362
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i2364 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i2365 = data
  request.r(i2365[0], i2365[1], 0, i2364, 'nameLabel')
  request.r(i2365[2], i2365[3], 0, i2364, 'valueLabel')
  i2364.colorDefault = new pc.Color(i2365[4], i2365[5], i2365[6], i2365[7])
  i2364.colorSelected = new pc.Color(i2365[8], i2365[9], i2365[10], i2365[11])
  return i2364
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i2366 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i2367 = data
  request.r(i2367[0], i2367[1], 0, i2366, 'nameLabel')
  request.r(i2367[2], i2367[3], 0, i2366, 'valueLabel')
  i2366.colorDefault = new pc.Color(i2367[4], i2367[5], i2367[6], i2367[7])
  i2366.colorSelected = new pc.Color(i2367[8], i2367[9], i2367[10], i2367[11])
  return i2366
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i2368 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i2369 = data
  request.r(i2369[0], i2369[1], 0, i2368, 'nextButtonText')
  request.r(i2369[2], i2369[3], 0, i2368, 'previousButtonText')
  request.r(i2369[4], i2369[5], 0, i2368, 'nameLabel')
  request.r(i2369[6], i2369[7], 0, i2368, 'valueLabel')
  i2368.colorDefault = new pc.Color(i2369[8], i2369[9], i2369[10], i2369[11])
  i2368.colorSelected = new pc.Color(i2369[12], i2369[13], i2369[14], i2369[15])
  return i2368
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i2370 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i2371 = data
  request.r(i2371[0], i2371[1], 0, i2370, 'nameLabel')
  i2370.colorDefault = new pc.Color(i2371[2], i2371[3], i2371[4], i2371[5])
  i2370.colorSelected = new pc.Color(i2371[6], i2371[7], i2371[8], i2371[9])
  return i2370
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i2372 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i2373 = data
  request.r(i2373[0], i2373[1], 0, i2372, 'nameLabel')
  request.r(i2373[2], i2373[3], 0, i2372, 'valueToggle')
  i2372.colorDefault = new pc.Color(i2373[4], i2373[5], i2373[6], i2373[7])
  i2372.colorSelected = new pc.Color(i2373[8], i2373[9], i2373[10], i2373[11])
  return i2372
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i2374 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i2375 = data
  i2374.toggleTransition = i2375[0]
  request.r(i2375[1], i2375[2], 0, i2374, 'graphic')
  i2374.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i2375[3], i2374.onValueChanged)
  request.r(i2375[4], i2375[5], 0, i2374, 'content')
  request.r(i2375[6], i2375[7], 0, i2374, 'arrowOpened')
  request.r(i2375[8], i2375[9], 0, i2374, 'arrowClosed')
  request.r(i2375[10], i2375[11], 0, i2374, 'm_Group')
  i2374.m_IsOn = !!i2375[12]
  i2374.m_Navigation = request.d('UnityEngine.UI.Navigation', i2375[13], i2374.m_Navigation)
  i2374.m_Transition = i2375[14]
  i2374.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2375[15], i2374.m_Colors)
  i2374.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2375[16], i2374.m_SpriteState)
  i2374.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2375[17], i2374.m_AnimationTriggers)
  i2374.m_Interactable = !!i2375[18]
  request.r(i2375[19], i2375[20], 0, i2374, 'm_TargetGraphic')
  return i2374
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i2376 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i2377 = data
  request.r(i2377[0], i2377[1], 0, i2376, 'nameLabel')
  request.r(i2377[2], i2377[3], 0, i2376, 'valueToggle')
  request.r(i2377[4], i2377[5], 0, i2376, 'colorImage')
  request.r(i2377[6], i2377[7], 0, i2376, 'fieldR')
  request.r(i2377[8], i2377[9], 0, i2376, 'fieldG')
  request.r(i2377[10], i2377[11], 0, i2376, 'fieldB')
  request.r(i2377[12], i2377[13], 0, i2376, 'fieldA')
  i2376.colorDefault = new pc.Color(i2377[14], i2377[15], i2377[16], i2377[17])
  i2376.colorSelected = new pc.Color(i2377[18], i2377[19], i2377[20], i2377[21])
  return i2376
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i2378 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i2379 = data
  request.r(i2379[0], i2379[1], 0, i2378, 'nameLabel')
  request.r(i2379[2], i2379[3], 0, i2378, 'valueLabel')
  i2378.colorDefault = new pc.Color(i2379[4], i2379[5], i2379[6], i2379[7])
  i2378.colorSelected = new pc.Color(i2379[8], i2379[9], i2379[10], i2379[11])
  return i2378
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i2380 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i2381 = data
  request.r(i2381[0], i2381[1], 0, i2380, 'nameLabel')
  request.r(i2381[2], i2381[3], 0, i2380, 'valueToggle')
  request.r(i2381[4], i2381[5], 0, i2380, 'fieldX')
  request.r(i2381[6], i2381[7], 0, i2380, 'fieldY')
  i2380.colorDefault = new pc.Color(i2381[8], i2381[9], i2381[10], i2381[11])
  i2380.colorSelected = new pc.Color(i2381[12], i2381[13], i2381[14], i2381[15])
  return i2380
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i2382 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i2383 = data
  request.r(i2383[0], i2383[1], 0, i2382, 'nameLabel')
  request.r(i2383[2], i2383[3], 0, i2382, 'valueToggle')
  request.r(i2383[4], i2383[5], 0, i2382, 'fieldX')
  request.r(i2383[6], i2383[7], 0, i2382, 'fieldY')
  request.r(i2383[8], i2383[9], 0, i2382, 'fieldZ')
  i2382.colorDefault = new pc.Color(i2383[10], i2383[11], i2383[12], i2383[13])
  i2382.colorSelected = new pc.Color(i2383[14], i2383[15], i2383[16], i2383[17])
  return i2382
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i2384 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i2385 = data
  request.r(i2385[0], i2385[1], 0, i2384, 'nameLabel')
  request.r(i2385[2], i2385[3], 0, i2384, 'valueToggle')
  request.r(i2385[4], i2385[5], 0, i2384, 'fieldX')
  request.r(i2385[6], i2385[7], 0, i2384, 'fieldY')
  request.r(i2385[8], i2385[9], 0, i2384, 'fieldZ')
  request.r(i2385[10], i2385[11], 0, i2384, 'fieldW')
  i2384.colorDefault = new pc.Color(i2385[12], i2385[13], i2385[14], i2385[15])
  i2384.colorSelected = new pc.Color(i2385[16], i2385[17], i2385[18], i2385[19])
  return i2384
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i2386 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i2387 = data
  i2386.colorDefault = new pc.Color(i2387[0], i2387[1], i2387[2], i2387[3])
  i2386.colorSelected = new pc.Color(i2387[4], i2387[5], i2387[6], i2387[7])
  return i2386
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i2388 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i2389 = data
  i2388.m_Spacing = i2389[0]
  i2388.m_ChildForceExpandWidth = !!i2389[1]
  i2388.m_ChildForceExpandHeight = !!i2389[2]
  i2388.m_ChildControlWidth = !!i2389[3]
  i2388.m_ChildControlHeight = !!i2389[4]
  i2388.m_ChildScaleWidth = !!i2389[5]
  i2388.m_ChildScaleHeight = !!i2389[6]
  i2388.m_ReverseArrangement = !!i2389[7]
  i2388.m_Padding = UnityEngine.RectOffset.FromPaddings(i2389[8], i2389[9], i2389[10], i2389[11])
  i2388.m_ChildAlignment = i2389[12]
  return i2388
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i2390 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i2391 = data
  i2390.colorDefault = new pc.Color(i2391[0], i2391[1], i2391[2], i2391[3])
  i2390.colorSelected = new pc.Color(i2391[4], i2391[5], i2391[6], i2391[7])
  return i2390
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i2392 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i2393 = data
  request.r(i2393[0], i2393[1], 0, i2392, 'nameLabel')
  request.r(i2393[2], i2393[3], 0, i2392, 'header')
  i2392.colorDefault = new pc.Color(i2393[4], i2393[5], i2393[6], i2393[7])
  i2392.colorSelected = new pc.Color(i2393[8], i2393[9], i2393[10], i2393[11])
  return i2392
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i2394 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i2395 = data
  request.r(i2395[0], i2395[1], 0, i2394, 'nameLabel')
  request.r(i2395[2], i2395[3], 0, i2394, 'valueToggle')
  var i2397 = i2395[4]
  var i2396 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i2397.length; i += 2) {
  request.r(i2397[i + 0], i2397[i + 1], 1, i2396, '')
  }
  i2394.toggles = i2396
  i2394.colorDefault = new pc.Color(i2395[5], i2395[6], i2395[7], i2395[8])
  i2394.colorSelected = new pc.Color(i2395[9], i2395[10], i2395[11], i2395[12])
  return i2394
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i2400 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i2401 = data
  request.r(i2401[0], i2401[1], 0, i2400, 'nameLabel')
  request.r(i2401[2], i2401[3], 0, i2400, 'valueToggle')
  request.r(i2401[4], i2401[5], 0, i2400, 'checkmarkImage')
  i2400.colorDefault = new pc.Color(i2401[6], i2401[7], i2401[8], i2401[9])
  i2400.colorSelected = new pc.Color(i2401[10], i2401[11], i2401[12], i2401[13])
  return i2400
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i2402 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i2403 = data
  request.r(i2403[0], i2403[1], 0, i2402, 'nameLabel')
  request.r(i2403[2], i2403[3], 0, i2402, 'valueToggle')
  request.r(i2403[4], i2403[5], 0, i2402, 'checkmarkImage')
  i2402.colorDefault = new pc.Color(i2403[6], i2403[7], i2403[8], i2403[9])
  i2402.colorSelected = new pc.Color(i2403[10], i2403[11], i2403[12], i2403[13])
  return i2402
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i2404 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i2405 = data
  request.r(i2405[0], i2405[1], 0, i2404, 'nextButtonText')
  request.r(i2405[2], i2405[3], 0, i2404, 'previousButtonText')
  request.r(i2405[4], i2405[5], 0, i2404, 'nameLabel')
  request.r(i2405[6], i2405[7], 0, i2404, 'valueLabel')
  i2404.colorDefault = new pc.Color(i2405[8], i2405[9], i2405[10], i2405[11])
  i2404.colorSelected = new pc.Color(i2405[12], i2405[13], i2405[14], i2405[15])
  return i2404
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i2406 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i2407 = data
  request.r(i2407[0], i2407[1], 0, i2406, 'nameLabel')
  request.r(i2407[2], i2407[3], 0, i2406, 'valueToggle')
  i2406.colorDefault = new pc.Color(i2407[4], i2407[5], i2407[6], i2407[7])
  i2406.colorSelected = new pc.Color(i2407[8], i2407[9], i2407[10], i2407[11])
  return i2406
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i2408 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i2409 = data
  request.r(i2409[0], i2409[1], 0, i2408, 'nameLabel')
  i2408.colorDefault = new pc.Color(i2409[2], i2409[3], i2409[4], i2409[5])
  i2408.colorSelected = new pc.Color(i2409[6], i2409[7], i2409[8], i2409[9])
  return i2408
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i2410 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i2411 = data
  request.r(i2411[0], i2411[1], 0, i2410, 'nameLabel')
  request.r(i2411[2], i2411[3], 0, i2410, 'valueLabel')
  request.r(i2411[4], i2411[5], 0, i2410, 'progressBarRect')
  i2410.colorDefault = new pc.Color(i2411[6], i2411[7], i2411[8], i2411[9])
  i2410.colorSelected = new pc.Color(i2411[10], i2411[11], i2411[12], i2411[13])
  return i2410
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i2412 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i2413 = data
  request.r(i2413[0], i2413[1], 0, i2412, 'nameLabel')
  request.r(i2413[2], i2413[3], 0, i2412, 'valueLabel')
  i2412.colorDefault = new pc.Color(i2413[4], i2413[5], i2413[6], i2413[7])
  i2412.colorSelected = new pc.Color(i2413[8], i2413[9], i2413[10], i2413[11])
  return i2412
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i2414 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i2415 = data
  request.r(i2415[0], i2415[1], 0, i2414, 'nameLabel')
  request.r(i2415[2], i2415[3], 0, i2414, 'valueLabel')
  i2414.colorDefault = new pc.Color(i2415[4], i2415[5], i2415[6], i2415[7])
  i2414.colorSelected = new pc.Color(i2415[8], i2415[9], i2415[10], i2415[11])
  return i2414
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i2416 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i2417 = data
  request.r(i2417[0], i2417[1], 0, i2416, 'nextButtonText')
  request.r(i2417[2], i2417[3], 0, i2416, 'previousButtonText')
  request.r(i2417[4], i2417[5], 0, i2416, 'nameLabel')
  request.r(i2417[6], i2417[7], 0, i2416, 'valueLabel')
  i2416.colorDefault = new pc.Color(i2417[8], i2417[9], i2417[10], i2417[11])
  i2416.colorSelected = new pc.Color(i2417[12], i2417[13], i2417[14], i2417[15])
  return i2416
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i2418 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i2419 = data
  request.r(i2419[0], i2419[1], 0, i2418, 'nextButtonText')
  request.r(i2419[2], i2419[3], 0, i2418, 'previousButtonText')
  request.r(i2419[4], i2419[5], 0, i2418, 'nameLabel')
  request.r(i2419[6], i2419[7], 0, i2418, 'valueLabel')
  i2418.colorDefault = new pc.Color(i2419[8], i2419[9], i2419[10], i2419[11])
  i2418.colorSelected = new pc.Color(i2419[12], i2419[13], i2419[14], i2419[15])
  return i2418
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i2420 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i2421 = data
  request.r(i2421[0], i2421[1], 0, i2420, 'panel')
  request.r(i2421[2], i2421[3], 0, i2420, 'valuePrefab')
  return i2420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i2422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i2423 = data
  i2422.AdditionalLightsPerObjectLimit = i2423[0]
  i2422.AdditionalLightsRenderingMode = i2423[1]
  i2422.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i2423[2], i2422.LightRenderingMode)
  i2422.ColorGradingLutSize = i2423[3]
  i2422.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i2423[4], i2422.ColorGradingMode)
  i2422.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i2423[5], i2422.MainLightRenderingMode)
  i2422.MainLightRenderingModeValue = i2423[6]
  i2422.SupportsMainLightShadows = !!i2423[7]
  i2422.MixedLightingSupported = !!i2423[8]
  i2422.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i2423[9], i2422.MsaaQuality)
  i2422.MSAA = i2423[10]
  i2422.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i2423[11], i2422.OpaqueDownsampling)
  i2422.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i2423[12], i2422.MainLightShadowmapResolution)
  i2422.MainLightShadowmapResolutionValue = i2423[13]
  i2422.SupportsSoftShadows = !!i2423[14]
  i2422.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i2423[15], i2422.SoftShadowQuality)
  i2422.SoftShadowQualityValue = i2423[16]
  i2422.ShadowDistance = i2423[17]
  i2422.ShadowCascadeCount = i2423[18]
  i2422.Cascade2Split = i2423[19]
  i2422.Cascade3Split = new pc.Vec2( i2423[20], i2423[21] )
  i2422.Cascade4Split = new pc.Vec3( i2423[22], i2423[23], i2423[24] )
  i2422.CascadeBorder = i2423[25]
  i2422.ShadowDepthBias = i2423[26]
  i2422.ShadowNormalBias = i2423[27]
  i2422.RenderScale = i2423[28]
  i2422.RequireDepthTexture = !!i2423[29]
  i2422.RequireOpaqueTexture = !!i2423[30]
  i2422.SupportsHDR = !!i2423[31]
  i2422.SupportsTerrainHoles = !!i2423[32]
  return i2422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i2424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i2425 = data
  i2424.Disabled = i2425[0]
  i2424.PerVertex = i2425[1]
  i2424.PerPixel = i2425[2]
  return i2424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i2426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i2427 = data
  i2426.LowDynamicRange = i2427[0]
  i2426.HighDynamicRange = i2427[1]
  return i2426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i2428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i2429 = data
  i2428.Disabled = i2429[0]
  i2428._2x = i2429[1]
  i2428._4x = i2429[2]
  i2428._8x = i2429[3]
  return i2428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i2430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i2431 = data
  i2430.None = i2431[0]
  i2430._2xBilinear = i2431[1]
  i2430._4xBox = i2431[2]
  i2430._4xBilinear = i2431[3]
  return i2430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i2432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i2433 = data
  i2432._256 = i2433[0]
  i2432._512 = i2433[1]
  i2432._1024 = i2433[2]
  i2432._2048 = i2433[3]
  i2432._4096 = i2433[4]
  return i2432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i2434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i2435 = data
  i2434.UsePipelineSettings = i2435[0]
  i2434.Low = i2435[1]
  i2434.Medium = i2435[2]
  i2434.High = i2435[3]
  return i2434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2437 = data
  var i2439 = i2437[0]
  var i2438 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2439.length; i += 1) {
    i2438.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2439[i + 0]));
  }
  i2436.ShaderCompilationErrors = i2438
  i2436.name = i2437[1]
  i2436.guid = i2437[2]
  var i2441 = i2437[3]
  var i2440 = []
  for(var i = 0; i < i2441.length; i += 1) {
    i2440.push( i2441[i + 0] );
  }
  i2436.shaderDefinedKeywords = i2440
  var i2443 = i2437[4]
  var i2442 = []
  for(var i = 0; i < i2443.length; i += 1) {
    i2442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2443[i + 0]) );
  }
  i2436.passes = i2442
  var i2445 = i2437[5]
  var i2444 = []
  for(var i = 0; i < i2445.length; i += 1) {
    i2444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2445[i + 0]) );
  }
  i2436.usePasses = i2444
  var i2447 = i2437[6]
  var i2446 = []
  for(var i = 0; i < i2447.length; i += 1) {
    i2446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2447[i + 0]) );
  }
  i2436.defaultParameterValues = i2446
  request.r(i2437[7], i2437[8], 0, i2436, 'unityFallbackShader')
  i2436.readDepth = !!i2437[9]
  i2436.isCreatedByShaderGraph = !!i2437[10]
  i2436.compiled = !!i2437[11]
  return i2436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2451 = data
  i2450.shaderName = i2451[0]
  i2450.errorMessage = i2451[1]
  return i2450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2456 = root || new pc.UnityShaderPass()
  var i2457 = data
  i2456.id = i2457[0]
  i2456.subShaderIndex = i2457[1]
  i2456.name = i2457[2]
  i2456.passType = i2457[3]
  i2456.grabPassTextureName = i2457[4]
  i2456.usePass = !!i2457[5]
  i2456.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2457[6], i2456.zTest)
  i2456.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2457[7], i2456.zWrite)
  i2456.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2457[8], i2456.culling)
  i2456.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2457[9], i2456.blending)
  i2456.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2457[10], i2456.alphaBlending)
  i2456.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2457[11], i2456.colorWriteMask)
  i2456.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2457[12], i2456.offsetUnits)
  i2456.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2457[13], i2456.offsetFactor)
  i2456.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2457[14], i2456.stencilRef)
  i2456.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2457[15], i2456.stencilReadMask)
  i2456.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2457[16], i2456.stencilWriteMask)
  i2456.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2457[17], i2456.stencilOp)
  i2456.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2457[18], i2456.stencilOpFront)
  i2456.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2457[19], i2456.stencilOpBack)
  var i2459 = i2457[20]
  var i2458 = []
  for(var i = 0; i < i2459.length; i += 1) {
    i2458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2459[i + 0]) );
  }
  i2456.tags = i2458
  var i2461 = i2457[21]
  var i2460 = []
  for(var i = 0; i < i2461.length; i += 1) {
    i2460.push( i2461[i + 0] );
  }
  i2456.passDefinedKeywords = i2460
  var i2463 = i2457[22]
  var i2462 = []
  for(var i = 0; i < i2463.length; i += 1) {
    i2462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2463[i + 0]) );
  }
  i2456.passDefinedKeywordGroups = i2462
  var i2465 = i2457[23]
  var i2464 = []
  for(var i = 0; i < i2465.length; i += 1) {
    i2464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2465[i + 0]) );
  }
  i2456.variants = i2464
  var i2467 = i2457[24]
  var i2466 = []
  for(var i = 0; i < i2467.length; i += 1) {
    i2466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2467[i + 0]) );
  }
  i2456.excludedVariants = i2466
  i2456.hasDepthReader = !!i2457[25]
  return i2456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2469 = data
  i2468.val = i2469[0]
  i2468.name = i2469[1]
  return i2468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2471 = data
  i2470.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2471[0], i2470.src)
  i2470.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2471[1], i2470.dst)
  i2470.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2471[2], i2470.op)
  return i2470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2473 = data
  i2472.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2473[0], i2472.pass)
  i2472.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2473[1], i2472.fail)
  i2472.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2473[2], i2472.zFail)
  i2472.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2473[3], i2472.comp)
  return i2472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2477 = data
  i2476.name = i2477[0]
  i2476.value = i2477[1]
  return i2476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2481 = data
  var i2483 = i2481[0]
  var i2482 = []
  for(var i = 0; i < i2483.length; i += 1) {
    i2482.push( i2483[i + 0] );
  }
  i2480.keywords = i2482
  i2480.hasDiscard = !!i2481[1]
  return i2480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2487 = data
  i2486.passId = i2487[0]
  i2486.subShaderIndex = i2487[1]
  var i2489 = i2487[2]
  var i2488 = []
  for(var i = 0; i < i2489.length; i += 1) {
    i2488.push( i2489[i + 0] );
  }
  i2486.keywords = i2488
  i2486.vertexProgram = i2487[3]
  i2486.fragmentProgram = i2487[4]
  i2486.exportedForWebGl2 = !!i2487[5]
  i2486.readDepth = !!i2487[6]
  return i2486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2493 = data
  request.r(i2493[0], i2493[1], 0, i2492, 'shader')
  i2492.pass = i2493[2]
  return i2492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2497 = data
  i2496.name = i2497[0]
  i2496.type = i2497[1]
  i2496.value = new pc.Vec4( i2497[2], i2497[3], i2497[4], i2497[5] )
  i2496.textureValue = i2497[6]
  i2496.shaderPropertyFlag = i2497[7]
  return i2496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2499 = data
  i2498.name = i2499[0]
  request.r(i2499[1], i2499[2], 0, i2498, 'texture')
  i2498.aabb = i2499[3]
  i2498.vertices = i2499[4]
  i2498.triangles = i2499[5]
  i2498.textureRect = UnityEngine.Rect.MinMaxRect(i2499[6], i2499[7], i2499[8], i2499[9])
  i2498.packedRect = UnityEngine.Rect.MinMaxRect(i2499[10], i2499[11], i2499[12], i2499[13])
  i2498.border = new pc.Vec4( i2499[14], i2499[15], i2499[16], i2499[17] )
  i2498.transparency = i2499[18]
  i2498.bounds = i2499[19]
  i2498.pixelsPerUnit = i2499[20]
  i2498.textureWidth = i2499[21]
  i2498.textureHeight = i2499[22]
  i2498.nativeSize = new pc.Vec2( i2499[23], i2499[24] )
  i2498.pivot = new pc.Vec2( i2499[25], i2499[26] )
  i2498.textureRectOffset = new pc.Vec2( i2499[27], i2499[28] )
  return i2498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2501 = data
  i2500.name = i2501[0]
  i2500.ascent = i2501[1]
  i2500.originalLineHeight = i2501[2]
  i2500.fontSize = i2501[3]
  var i2503 = i2501[4]
  var i2502 = []
  for(var i = 0; i < i2503.length; i += 1) {
    i2502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2503[i + 0]) );
  }
  i2500.characterInfo = i2502
  request.r(i2501[5], i2501[6], 0, i2500, 'texture')
  i2500.originalFontSize = i2501[7]
  return i2500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2507 = data
  i2506.index = i2507[0]
  i2506.advance = i2507[1]
  i2506.bearing = i2507[2]
  i2506.glyphWidth = i2507[3]
  i2506.glyphHeight = i2507[4]
  i2506.minX = i2507[5]
  i2506.maxX = i2507[6]
  i2506.minY = i2507[7]
  i2506.maxY = i2507[8]
  i2506.uvBottomLeftX = i2507[9]
  i2506.uvBottomLeftY = i2507[10]
  i2506.uvBottomRightX = i2507[11]
  i2506.uvBottomRightY = i2507[12]
  i2506.uvTopLeftX = i2507[13]
  i2506.uvTopLeftY = i2507[14]
  i2506.uvTopRightX = i2507[15]
  i2506.uvTopRightY = i2507[16]
  return i2506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2509 = data
  i2508.name = i2509[0]
  i2508.bytes64 = i2509[1]
  i2508.data = i2509[2]
  return i2508
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2510 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2511 = data
  i2510.hashCode = i2511[0]
  request.r(i2511[1], i2511[2], 0, i2510, 'material')
  i2510.materialHashCode = i2511[3]
  request.r(i2511[4], i2511[5], 0, i2510, 'atlas')
  i2510.normalStyle = i2511[6]
  i2510.normalSpacingOffset = i2511[7]
  i2510.boldStyle = i2511[8]
  i2510.boldSpacing = i2511[9]
  i2510.italicStyle = i2511[10]
  i2510.tabSize = i2511[11]
  i2510.m_Version = i2511[12]
  i2510.m_SourceFontFileGUID = i2511[13]
  request.r(i2511[14], i2511[15], 0, i2510, 'm_SourceFontFile_EditorRef')
  request.r(i2511[16], i2511[17], 0, i2510, 'm_SourceFontFile')
  i2510.m_AtlasPopulationMode = i2511[18]
  i2510.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2511[19], i2510.m_FaceInfo)
  var i2513 = i2511[20]
  var i2512 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2513.length; i += 1) {
    i2512.add(request.d('UnityEngine.TextCore.Glyph', i2513[i + 0]));
  }
  i2510.m_GlyphTable = i2512
  var i2515 = i2511[21]
  var i2514 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2515.length; i += 1) {
    i2514.add(request.d('TMPro.TMP_Character', i2515[i + 0]));
  }
  i2510.m_CharacterTable = i2514
  var i2517 = i2511[22]
  var i2516 = []
  for(var i = 0; i < i2517.length; i += 2) {
  request.r(i2517[i + 0], i2517[i + 1], 2, i2516, '')
  }
  i2510.m_AtlasTextures = i2516
  i2510.m_AtlasTextureIndex = i2511[23]
  i2510.m_IsMultiAtlasTexturesEnabled = !!i2511[24]
  i2510.m_ClearDynamicDataOnBuild = !!i2511[25]
  var i2519 = i2511[26]
  var i2518 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2519.length; i += 1) {
    i2518.add(request.d('UnityEngine.TextCore.GlyphRect', i2519[i + 0]));
  }
  i2510.m_UsedGlyphRects = i2518
  var i2521 = i2511[27]
  var i2520 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2521.length; i += 1) {
    i2520.add(request.d('UnityEngine.TextCore.GlyphRect', i2521[i + 0]));
  }
  i2510.m_FreeGlyphRects = i2520
  i2510.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2511[28], i2510.m_fontInfo)
  i2510.m_AtlasWidth = i2511[29]
  i2510.m_AtlasHeight = i2511[30]
  i2510.m_AtlasPadding = i2511[31]
  i2510.m_AtlasRenderMode = i2511[32]
  var i2523 = i2511[33]
  var i2522 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2523.length; i += 1) {
    i2522.add(request.d('TMPro.TMP_Glyph', i2523[i + 0]));
  }
  i2510.m_glyphInfoList = i2522
  i2510.m_KerningTable = request.d('TMPro.KerningTable', i2511[34], i2510.m_KerningTable)
  i2510.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2511[35], i2510.m_FontFeatureTable)
  var i2525 = i2511[36]
  var i2524 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2525.length; i += 2) {
  request.r(i2525[i + 0], i2525[i + 1], 1, i2524, '')
  }
  i2510.fallbackFontAssets = i2524
  var i2527 = i2511[37]
  var i2526 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2527.length; i += 2) {
  request.r(i2527[i + 0], i2527[i + 1], 1, i2526, '')
  }
  i2510.m_FallbackFontAssetTable = i2526
  i2510.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2511[38], i2510.m_CreationSettings)
  var i2529 = i2511[39]
  var i2528 = []
  for(var i = 0; i < i2529.length; i += 1) {
    i2528.push( request.d('TMPro.TMP_FontWeightPair', i2529[i + 0]) );
  }
  i2510.m_FontWeightTable = i2528
  var i2531 = i2511[40]
  var i2530 = []
  for(var i = 0; i < i2531.length; i += 1) {
    i2530.push( request.d('TMPro.TMP_FontWeightPair', i2531[i + 0]) );
  }
  i2510.fontWeights = i2530
  return i2510
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2532 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2533 = data
  i2532.m_FaceIndex = i2533[0]
  i2532.m_FamilyName = i2533[1]
  i2532.m_StyleName = i2533[2]
  i2532.m_PointSize = i2533[3]
  i2532.m_Scale = i2533[4]
  i2532.m_UnitsPerEM = i2533[5]
  i2532.m_LineHeight = i2533[6]
  i2532.m_AscentLine = i2533[7]
  i2532.m_CapLine = i2533[8]
  i2532.m_MeanLine = i2533[9]
  i2532.m_Baseline = i2533[10]
  i2532.m_DescentLine = i2533[11]
  i2532.m_SuperscriptOffset = i2533[12]
  i2532.m_SuperscriptSize = i2533[13]
  i2532.m_SubscriptOffset = i2533[14]
  i2532.m_SubscriptSize = i2533[15]
  i2532.m_UnderlineOffset = i2533[16]
  i2532.m_UnderlineThickness = i2533[17]
  i2532.m_StrikethroughOffset = i2533[18]
  i2532.m_StrikethroughThickness = i2533[19]
  i2532.m_TabWidth = i2533[20]
  return i2532
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2536 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2537 = data
  i2536.m_Index = i2537[0]
  i2536.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2537[1], i2536.m_Metrics)
  i2536.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2537[2], i2536.m_GlyphRect)
  i2536.m_Scale = i2537[3]
  i2536.m_AtlasIndex = i2537[4]
  i2536.m_ClassDefinitionType = i2537[5]
  return i2536
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2538 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2539 = data
  i2538.m_Width = i2539[0]
  i2538.m_Height = i2539[1]
  i2538.m_HorizontalBearingX = i2539[2]
  i2538.m_HorizontalBearingY = i2539[3]
  i2538.m_HorizontalAdvance = i2539[4]
  return i2538
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2540 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2541 = data
  i2540.m_X = i2541[0]
  i2540.m_Y = i2541[1]
  i2540.m_Width = i2541[2]
  i2540.m_Height = i2541[3]
  return i2540
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2544 = root || request.c( 'TMPro.TMP_Character' )
  var i2545 = data
  i2544.m_ElementType = i2545[0]
  i2544.m_Unicode = i2545[1]
  i2544.m_GlyphIndex = i2545[2]
  i2544.m_Scale = i2545[3]
  return i2544
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2550 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2551 = data
  i2550.Name = i2551[0]
  i2550.PointSize = i2551[1]
  i2550.Scale = i2551[2]
  i2550.CharacterCount = i2551[3]
  i2550.LineHeight = i2551[4]
  i2550.Baseline = i2551[5]
  i2550.Ascender = i2551[6]
  i2550.CapHeight = i2551[7]
  i2550.Descender = i2551[8]
  i2550.CenterLine = i2551[9]
  i2550.SuperscriptOffset = i2551[10]
  i2550.SubscriptOffset = i2551[11]
  i2550.SubSize = i2551[12]
  i2550.Underline = i2551[13]
  i2550.UnderlineThickness = i2551[14]
  i2550.strikethrough = i2551[15]
  i2550.strikethroughThickness = i2551[16]
  i2550.TabWidth = i2551[17]
  i2550.Padding = i2551[18]
  i2550.AtlasWidth = i2551[19]
  i2550.AtlasHeight = i2551[20]
  return i2550
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2554 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2555 = data
  i2554.id = i2555[0]
  i2554.x = i2555[1]
  i2554.y = i2555[2]
  i2554.width = i2555[3]
  i2554.height = i2555[4]
  i2554.xOffset = i2555[5]
  i2554.yOffset = i2555[6]
  i2554.xAdvance = i2555[7]
  i2554.scale = i2555[8]
  return i2554
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2556 = root || request.c( 'TMPro.KerningTable' )
  var i2557 = data
  var i2559 = i2557[0]
  var i2558 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2559.length; i += 1) {
    i2558.add(request.d('TMPro.KerningPair', i2559[i + 0]));
  }
  i2556.kerningPairs = i2558
  return i2556
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2562 = root || request.c( 'TMPro.KerningPair' )
  var i2563 = data
  i2562.xOffset = i2563[0]
  i2562.m_FirstGlyph = i2563[1]
  i2562.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2563[2], i2562.m_FirstGlyphAdjustments)
  i2562.m_SecondGlyph = i2563[3]
  i2562.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2563[4], i2562.m_SecondGlyphAdjustments)
  i2562.m_IgnoreSpacingAdjustments = !!i2563[5]
  return i2562
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2564 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2565 = data
  var i2567 = i2565[0]
  var i2566 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2567.length; i += 1) {
    i2566.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2567[i + 0]));
  }
  i2564.m_GlyphPairAdjustmentRecords = i2566
  return i2564
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2570 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2571 = data
  i2570.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2571[0], i2570.m_FirstAdjustmentRecord)
  i2570.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2571[1], i2570.m_SecondAdjustmentRecord)
  i2570.m_FeatureLookupFlags = i2571[2]
  return i2570
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2572 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2573 = data
  i2572.m_GlyphIndex = i2573[0]
  i2572.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2573[1], i2572.m_GlyphValueRecord)
  return i2572
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2574 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2575 = data
  i2574.m_XPlacement = i2575[0]
  i2574.m_YPlacement = i2575[1]
  i2574.m_XAdvance = i2575[2]
  i2574.m_YAdvance = i2575[3]
  return i2574
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2578 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2579 = data
  i2578.sourceFontFileName = i2579[0]
  i2578.sourceFontFileGUID = i2579[1]
  i2578.pointSizeSamplingMode = i2579[2]
  i2578.pointSize = i2579[3]
  i2578.padding = i2579[4]
  i2578.packingMode = i2579[5]
  i2578.atlasWidth = i2579[6]
  i2578.atlasHeight = i2579[7]
  i2578.characterSetSelectionMode = i2579[8]
  i2578.characterSequence = i2579[9]
  i2578.referencedFontAssetGUID = i2579[10]
  i2578.referencedTextAssetGUID = i2579[11]
  i2578.fontStyle = i2579[12]
  i2578.fontStyleModifier = i2579[13]
  i2578.renderMode = i2579[14]
  i2578.includeFontFeatures = !!i2579[15]
  return i2578
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2582 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2583 = data
  request.r(i2583[0], i2583[1], 0, i2582, 'regularTypeface')
  request.r(i2583[2], i2583[3], 0, i2582, 'italicTypeface')
  return i2582
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2584 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2585 = data
  i2584.useSafeMode = !!i2585[0]
  i2584.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2585[1], i2584.safeModeOptions)
  i2584.timeScale = i2585[2]
  i2584.unscaledTimeScale = i2585[3]
  i2584.useSmoothDeltaTime = !!i2585[4]
  i2584.maxSmoothUnscaledTime = i2585[5]
  i2584.rewindCallbackMode = i2585[6]
  i2584.showUnityEditorReport = !!i2585[7]
  i2584.logBehaviour = i2585[8]
  i2584.drawGizmos = !!i2585[9]
  i2584.defaultRecyclable = !!i2585[10]
  i2584.defaultAutoPlay = i2585[11]
  i2584.defaultUpdateType = i2585[12]
  i2584.defaultTimeScaleIndependent = !!i2585[13]
  i2584.defaultEaseType = i2585[14]
  i2584.defaultEaseOvershootOrAmplitude = i2585[15]
  i2584.defaultEasePeriod = i2585[16]
  i2584.defaultAutoKill = !!i2585[17]
  i2584.defaultLoopType = i2585[18]
  i2584.debugMode = !!i2585[19]
  i2584.debugStoreTargetId = !!i2585[20]
  i2584.showPreviewPanel = !!i2585[21]
  i2584.storeSettingsLocation = i2585[22]
  i2584.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2585[23], i2584.modules)
  i2584.createASMDEF = !!i2585[24]
  i2584.showPlayingTweens = !!i2585[25]
  i2584.showPausedTweens = !!i2585[26]
  return i2584
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2586 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2587 = data
  i2586.logBehaviour = i2587[0]
  i2586.nestedTweenFailureBehaviour = i2587[1]
  return i2586
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2588 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2589 = data
  i2588.showPanel = !!i2589[0]
  i2588.audioEnabled = !!i2589[1]
  i2588.physicsEnabled = !!i2589[2]
  i2588.physics2DEnabled = !!i2589[3]
  i2588.spriteEnabled = !!i2589[4]
  i2588.uiEnabled = !!i2589[5]
  i2588.textMeshProEnabled = !!i2589[6]
  i2588.tk2DEnabled = !!i2589[7]
  i2588.deAudioEnabled = !!i2589[8]
  i2588.deUnityExtendedEnabled = !!i2589[9]
  i2588.epoOutlineEnabled = !!i2589[10]
  return i2588
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2590 = root || request.c( 'TMPro.TMP_Settings' )
  var i2591 = data
  i2590.m_enableWordWrapping = !!i2591[0]
  i2590.m_enableKerning = !!i2591[1]
  i2590.m_enableExtraPadding = !!i2591[2]
  i2590.m_enableTintAllSprites = !!i2591[3]
  i2590.m_enableParseEscapeCharacters = !!i2591[4]
  i2590.m_EnableRaycastTarget = !!i2591[5]
  i2590.m_GetFontFeaturesAtRuntime = !!i2591[6]
  i2590.m_missingGlyphCharacter = i2591[7]
  i2590.m_warningsDisabled = !!i2591[8]
  request.r(i2591[9], i2591[10], 0, i2590, 'm_defaultFontAsset')
  i2590.m_defaultFontAssetPath = i2591[11]
  i2590.m_defaultFontSize = i2591[12]
  i2590.m_defaultAutoSizeMinRatio = i2591[13]
  i2590.m_defaultAutoSizeMaxRatio = i2591[14]
  i2590.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2591[15], i2591[16] )
  i2590.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2591[17], i2591[18] )
  i2590.m_autoSizeTextContainer = !!i2591[19]
  i2590.m_IsTextObjectScaleStatic = !!i2591[20]
  var i2593 = i2591[21]
  var i2592 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2593.length; i += 2) {
  request.r(i2593[i + 0], i2593[i + 1], 1, i2592, '')
  }
  i2590.m_fallbackFontAssets = i2592
  i2590.m_matchMaterialPreset = !!i2591[22]
  request.r(i2591[23], i2591[24], 0, i2590, 'm_defaultSpriteAsset')
  i2590.m_defaultSpriteAssetPath = i2591[25]
  i2590.m_enableEmojiSupport = !!i2591[26]
  i2590.m_MissingCharacterSpriteUnicode = i2591[27]
  i2590.m_defaultColorGradientPresetsPath = i2591[28]
  request.r(i2591[29], i2591[30], 0, i2590, 'm_defaultStyleSheet')
  i2590.m_StyleSheetsResourcePath = i2591[31]
  request.r(i2591[32], i2591[33], 0, i2590, 'm_leadingCharacters')
  request.r(i2591[34], i2591[35], 0, i2590, 'm_followingCharacters')
  i2590.m_UseModernHangulLineBreakingRules = !!i2591[36]
  return i2590
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2594 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2595 = data
  i2594.hashCode = i2595[0]
  request.r(i2595[1], i2595[2], 0, i2594, 'material')
  i2594.materialHashCode = i2595[3]
  request.r(i2595[4], i2595[5], 0, i2594, 'spriteSheet')
  var i2597 = i2595[6]
  var i2596 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2597.length; i += 1) {
    i2596.add(request.d('TMPro.TMP_Sprite', i2597[i + 0]));
  }
  i2594.spriteInfoList = i2596
  var i2599 = i2595[7]
  var i2598 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2599.length; i += 2) {
  request.r(i2599[i + 0], i2599[i + 1], 1, i2598, '')
  }
  i2594.fallbackSpriteAssets = i2598
  i2594.m_Version = i2595[8]
  i2594.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2595[9], i2594.m_FaceInfo)
  var i2601 = i2595[10]
  var i2600 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2601.length; i += 1) {
    i2600.add(request.d('TMPro.TMP_SpriteCharacter', i2601[i + 0]));
  }
  i2594.m_SpriteCharacterTable = i2600
  var i2603 = i2595[11]
  var i2602 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2603.length; i += 1) {
    i2602.add(request.d('TMPro.TMP_SpriteGlyph', i2603[i + 0]));
  }
  i2594.m_SpriteGlyphTable = i2602
  return i2594
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2606 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2607 = data
  i2606.name = i2607[0]
  i2606.hashCode = i2607[1]
  i2606.unicode = i2607[2]
  i2606.pivot = new pc.Vec2( i2607[3], i2607[4] )
  request.r(i2607[5], i2607[6], 0, i2606, 'sprite')
  i2606.id = i2607[7]
  i2606.x = i2607[8]
  i2606.y = i2607[9]
  i2606.width = i2607[10]
  i2606.height = i2607[11]
  i2606.xOffset = i2607[12]
  i2606.yOffset = i2607[13]
  i2606.xAdvance = i2607[14]
  i2606.scale = i2607[15]
  return i2606
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2612 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2613 = data
  i2612.m_Name = i2613[0]
  i2612.m_HashCode = i2613[1]
  i2612.m_ElementType = i2613[2]
  i2612.m_Unicode = i2613[3]
  i2612.m_GlyphIndex = i2613[4]
  i2612.m_Scale = i2613[5]
  return i2612
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2616 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2617 = data
  request.r(i2617[0], i2617[1], 0, i2616, 'sprite')
  i2616.m_Index = i2617[2]
  i2616.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2617[3], i2616.m_Metrics)
  i2616.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2617[4], i2616.m_GlyphRect)
  i2616.m_Scale = i2617[5]
  i2616.m_AtlasIndex = i2617[6]
  i2616.m_ClassDefinitionType = i2617[7]
  return i2616
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2618 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2619 = data
  var i2621 = i2619[0]
  var i2620 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2621.length; i += 1) {
    i2620.add(request.d('TMPro.TMP_Style', i2621[i + 0]));
  }
  i2618.m_StyleList = i2620
  return i2618
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2624 = root || request.c( 'TMPro.TMP_Style' )
  var i2625 = data
  i2624.m_Name = i2625[0]
  i2624.m_HashCode = i2625[1]
  i2624.m_OpeningDefinition = i2625[2]
  i2624.m_ClosingDefinition = i2625[3]
  i2624.m_OpeningTagArray = i2625[4]
  i2624.m_ClosingTagArray = i2625[5]
  i2624.m_OpeningTagUnicodeArray = i2625[6]
  i2624.m_ClosingTagUnicodeArray = i2625[7]
  return i2624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2627 = data
  var i2629 = i2627[0]
  var i2628 = []
  for(var i = 0; i < i2629.length; i += 1) {
    i2628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2629[i + 0]) );
  }
  i2626.files = i2628
  i2626.componentToPrefabIds = i2627[1]
  return i2626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2633 = data
  i2632.path = i2633[0]
  request.r(i2633[1], i2633[2], 0, i2632, 'unityObject')
  return i2632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2635 = data
  var i2637 = i2635[0]
  var i2636 = []
  for(var i = 0; i < i2637.length; i += 1) {
    i2636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2637[i + 0]) );
  }
  i2634.scriptsExecutionOrder = i2636
  var i2639 = i2635[1]
  var i2638 = []
  for(var i = 0; i < i2639.length; i += 1) {
    i2638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2639[i + 0]) );
  }
  i2634.sortingLayers = i2638
  var i2641 = i2635[2]
  var i2640 = []
  for(var i = 0; i < i2641.length; i += 1) {
    i2640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2641[i + 0]) );
  }
  i2634.cullingLayers = i2640
  i2634.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2635[3], i2634.timeSettings)
  i2634.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2635[4], i2634.physicsSettings)
  i2634.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2635[5], i2634.physics2DSettings)
  i2634.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2635[6], i2634.qualitySettings)
  i2634.enableRealtimeShadows = !!i2635[7]
  i2634.enableAutoInstancing = !!i2635[8]
  i2634.enableDynamicBatching = !!i2635[9]
  i2634.lightmapEncodingQuality = i2635[10]
  i2634.desiredColorSpace = i2635[11]
  var i2643 = i2635[12]
  var i2642 = []
  for(var i = 0; i < i2643.length; i += 1) {
    i2642.push( i2643[i + 0] );
  }
  i2634.allTags = i2642
  return i2634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2647 = data
  i2646.name = i2647[0]
  i2646.value = i2647[1]
  return i2646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2651 = data
  i2650.id = i2651[0]
  i2650.name = i2651[1]
  i2650.value = i2651[2]
  return i2650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2655 = data
  i2654.id = i2655[0]
  i2654.name = i2655[1]
  return i2654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2657 = data
  i2656.fixedDeltaTime = i2657[0]
  i2656.maximumDeltaTime = i2657[1]
  i2656.timeScale = i2657[2]
  i2656.maximumParticleTimestep = i2657[3]
  return i2656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2659 = data
  i2658.gravity = new pc.Vec3( i2659[0], i2659[1], i2659[2] )
  i2658.defaultSolverIterations = i2659[3]
  i2658.bounceThreshold = i2659[4]
  i2658.autoSyncTransforms = !!i2659[5]
  i2658.autoSimulation = !!i2659[6]
  var i2661 = i2659[7]
  var i2660 = []
  for(var i = 0; i < i2661.length; i += 1) {
    i2660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2661[i + 0]) );
  }
  i2658.collisionMatrix = i2660
  return i2658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2665 = data
  i2664.enabled = !!i2665[0]
  i2664.layerId = i2665[1]
  i2664.otherLayerId = i2665[2]
  return i2664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2667 = data
  request.r(i2667[0], i2667[1], 0, i2666, 'material')
  i2666.gravity = new pc.Vec2( i2667[2], i2667[3] )
  i2666.positionIterations = i2667[4]
  i2666.velocityIterations = i2667[5]
  i2666.velocityThreshold = i2667[6]
  i2666.maxLinearCorrection = i2667[7]
  i2666.maxAngularCorrection = i2667[8]
  i2666.maxTranslationSpeed = i2667[9]
  i2666.maxRotationSpeed = i2667[10]
  i2666.baumgarteScale = i2667[11]
  i2666.baumgarteTOIScale = i2667[12]
  i2666.timeToSleep = i2667[13]
  i2666.linearSleepTolerance = i2667[14]
  i2666.angularSleepTolerance = i2667[15]
  i2666.defaultContactOffset = i2667[16]
  i2666.autoSimulation = !!i2667[17]
  i2666.queriesHitTriggers = !!i2667[18]
  i2666.queriesStartInColliders = !!i2667[19]
  i2666.callbacksOnDisable = !!i2667[20]
  i2666.reuseCollisionCallbacks = !!i2667[21]
  i2666.autoSyncTransforms = !!i2667[22]
  var i2669 = i2667[23]
  var i2668 = []
  for(var i = 0; i < i2669.length; i += 1) {
    i2668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2669[i + 0]) );
  }
  i2666.collisionMatrix = i2668
  return i2666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2673 = data
  i2672.enabled = !!i2673[0]
  i2672.layerId = i2673[1]
  i2672.otherLayerId = i2673[2]
  return i2672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2675 = data
  var i2677 = i2675[0]
  var i2676 = []
  for(var i = 0; i < i2677.length; i += 1) {
    i2676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2677[i + 0]) );
  }
  i2674.qualityLevels = i2676
  var i2679 = i2675[1]
  var i2678 = []
  for(var i = 0; i < i2679.length; i += 1) {
    i2678.push( i2679[i + 0] );
  }
  i2674.names = i2678
  i2674.shadows = i2675[2]
  i2674.anisotropicFiltering = i2675[3]
  i2674.antiAliasing = i2675[4]
  i2674.lodBias = i2675[5]
  i2674.shadowCascades = i2675[6]
  i2674.shadowDistance = i2675[7]
  i2674.shadowmaskMode = i2675[8]
  i2674.shadowProjection = i2675[9]
  i2674.shadowResolution = i2675[10]
  i2674.softParticles = !!i2675[11]
  i2674.softVegetation = !!i2675[12]
  i2674.activeColorSpace = i2675[13]
  i2674.desiredColorSpace = i2675[14]
  i2674.masterTextureLimit = i2675[15]
  i2674.maxQueuedFrames = i2675[16]
  i2674.particleRaycastBudget = i2675[17]
  i2674.pixelLightCount = i2675[18]
  i2674.realtimeReflectionProbes = !!i2675[19]
  i2674.shadowCascade2Split = i2675[20]
  i2674.shadowCascade4Split = new pc.Vec3( i2675[21], i2675[22], i2675[23] )
  i2674.streamingMipmapsActive = !!i2675[24]
  i2674.vSyncCount = i2675[25]
  i2674.asyncUploadBufferSize = i2675[26]
  i2674.asyncUploadTimeSlice = i2675[27]
  i2674.billboardsFaceCameraPosition = !!i2675[28]
  i2674.shadowNearPlaneOffset = i2675[29]
  i2674.streamingMipmapsMemoryBudget = i2675[30]
  i2674.maximumLODLevel = i2675[31]
  i2674.streamingMipmapsAddAllCameras = !!i2675[32]
  i2674.streamingMipmapsMaxLevelReduction = i2675[33]
  i2674.streamingMipmapsRenderersPerFrame = i2675[34]
  i2674.resolutionScalingFixedDPIFactor = i2675[35]
  i2674.streamingMipmapsMaxFileIORequests = i2675[36]
  i2674.currentQualityLevel = i2675[37]
  return i2674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2685 = data
  i2684.weight = i2685[0]
  i2684.vertices = i2685[1]
  i2684.normals = i2685[2]
  i2684.tangents = i2685[3]
  return i2684
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2686 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2687 = data
  i2686.xPlacement = i2687[0]
  i2686.yPlacement = i2687[1]
  i2686.xAdvance = i2687[2]
  i2686.yAdvance = i2687[3]
  return i2686
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"edgeRadius":8,"points":9,"useAdjacentStartPoint":10,"adjacentStartPoint":11,"useAdjacentEndPoint":13,"adjacentEndPoint":14},"Luna.Unity.DTO.UnityEngine.Components.PlatformEffector2D":{"enabled":0,"useColliderMask":1,"colliderMask":2},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"90":[91],"92":[91],"93":[91],"94":[91],"95":[91],"96":[91],"97":[98],"99":[17],"100":[101],"102":[101],"103":[101],"104":[101],"105":[101],"106":[101],"107":[101],"108":[109],"110":[109],"111":[109],"112":[109],"113":[109],"114":[109],"115":[109],"116":[109],"117":[109],"118":[109],"119":[109],"120":[109],"121":[109],"122":[17],"123":[3],"124":[125],"126":[125],"30":[11],"127":[109],"16":[14,12,11],"63":[11],"128":[17],"19":[17],"22":[21],"129":[130],"131":[11],"132":[11],"35":[30],"28":[14,11],"133":[11],"33":[30],"44":[11],"134":[11],"70":[11],"135":[11],"49":[11],"136":[11],"43":[11],"52":[11],"137":[11],"138":[14,11],"139":[11],"51":[11],"48":[11],"140":[11],"47":[14,11],"56":[11],"141":[23],"142":[23],"24":[23],"143":[23],"144":[17],"20":[17],"145":[130],"146":[11],"147":[3,11],"37":[11,14],"148":[11],"149":[14,11],"150":[3],"151":[14,11],"152":[11],"153":[130]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","Box","UnityEngine.BoxCollider","UnityEngine.Shader","Goods","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Extensions.CasualGame.UIParticleSystem","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","GManager","BoxSetController","ParticleController","UnityEngine.UI.Image","GameClearUI","UnityEngine.Canvas","UnityEngine.GameObject","Advertise","UnityEngine.UI.CanvasScaler","UnityEngine.Sprite","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Button","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UIDotweenUpDown","ComboText","UnityEngine.Cubemap","UnityEngine.Rendering.UI.DebugUIHandlerCanvas","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","UnityEngine.Rendering.UI.DebugUIHandlerContainer","UnityEngine.Rendering.UI.DebugUIHandlerPanel","UnityEngine.UI.Text","UnityEngine.UI.ScrollRect","UnityEngine.UI.LayoutElement","UnityEngine.Font","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.EventSystems.EventTrigger","UnityEngine.Rendering.UI.DebugUIHandlerValue","UnityEngine.Rendering.UI.DebugUIHandlerToggle","UnityEngine.UI.Toggle","UnityEngine.Rendering.UI.DebugUIHandlerIntField","UnityEngine.Rendering.UI.DebugUIHandlerUIntField","UnityEngine.Rendering.UI.DebugUIHandlerFloatField","UnityEngine.Rendering.UI.DebugUIHandlerEnumField","UnityEngine.Rendering.UI.DebugUIHandlerButton","UnityEngine.Rendering.UI.DebugUIHandlerFoldout","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.UI.DebugUIHandlerColor","UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField","UnityEngine.Rendering.UI.DebugUIHandlerVector2","UnityEngine.Rendering.UI.DebugUIHandlerVector3","UnityEngine.Rendering.UI.DebugUIHandlerVector4","UnityEngine.Rendering.UI.DebugUIHandlerVBox","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Rendering.UI.DebugUIHandlerHBox","UnityEngine.Rendering.UI.DebugUIHandlerGroup","UnityEngine.Rendering.UI.DebugUIHandlerBitField","UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle","UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory","UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory","UnityEngine.Rendering.UI.DebugUIHandlerRow","UnityEngine.Rendering.UI.DebugUIHandlerMessageBox","UnityEngine.Rendering.UI.DebugUIHandlerProgressBar","UnityEngine.Rendering.UI.DebugUIHandlerValueTuple","UnityEngine.Rendering.UI.DebugUIHandlerObject","UnityEngine.Rendering.UI.DebugUIHandlerObjectList","UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField","UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","PlayerController","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.60f1";

Deserializers.productName = "Playable_Project";

Deserializers.lunaInitializationTime = "08/06/2025 07:37:53";

Deserializers.lunaDaysRunning = "1.0";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "k980128-naver-com";

Deserializers.lunaAppID = "31170";

Deserializers.projectId = "1ea3bb43f778449c78ecaf64beaf075a";

Deserializers.packagesInfo = "com.unity.nuget.newtonsoft-json: 2.0.0\ncom.unity.render-pipelines.universal: 14.0.12\ncom.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "WebGL";

Deserializers.applicationIdentifier = "com.DefaultCompany.Playable-Project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "915be015-82d3-4025-ba03-af641cc1ff98";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

