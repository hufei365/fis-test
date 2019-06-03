const path = require('path');

fis.set('charset', 'utf-8');
fis.set('namespace', "test");
fis.set('import', [ 'test-common' ]);
fis.set('map_file', '/resource-map.js');


fis.hook(require('../fis3-hook-npm'));


fis.match('/**\.{css,scss}', {
    // 图片合并
    useSprite: true
});

fis.match('/src/{require.js, resource-map.js}', {
    isMod: false,
    parser: null
});
fis.match('::package', {
    // 图片合并
    spriter: fis.plugin('csssprites', {
        // 排列方式, linear || matrix
        layout: 'linear'
    })
});

// 编译vue组件
fis.match('/src/**.vue', {
    useCompile: true, // need force specific the property  // https://github.com/fex-team/fis3/commit/eadc96bfe112d5d4cf5eb349e8a2b6e195bcb5c2
    isMod: true,
    // useHash: true,
    rExt: 'js',
    useSameNameRequire: true,
	isPartial:false,
    parser: [
        (function(c, f){
            f.isJsLike=true;
            f.isPartial = false;
            console.log(22222222222);

            return c;
        }),
        // https://github.com/ccqgithub/fis3-parser-vue-component
        fis.plugin('vue-component', {
            runtimeOnly: true,
            styleNameJoin: '',
            extractCSS: false,
            cssScopedIdPrefix: '_v-',
            cssScopedHashType: 'sum',
            cssScopedHashLength: 8,
            cssScopedFlag: '__vuec__',
			isPartial:false,
        })
		,fis.plugin('babel-7', {
            sourceMap:false
        }) // 处理ES6
    ]
});


fis.match('/src/(**.{html, js, png, scss, css, jpg, vue})', {
    release :'$1',
    // deploy: fis.plugin('local-deliver', {
    //     to: path.resolve(__dirname, './output')
    // })
});
fis.match('/src/(**).vue', {
    release :'$1_vue.js',
    // deploy: fis.plugin('local-deliver', {
    //     to: path.resolve(__dirname, './output')
    // })
});


fis.match('/node_modules/(*)/**.js', {
    release :'$0',
    // deploy: fis.plugin('local-deliver', {
    //     to: path.resolve(__dirname, './output')
    // })
});



fis.media('112').match('/src/(**.{html, js, png, scss, css, jpg, vue})', {
    release :'$1',
    deploy: fis.plugin('http-push', {
        receiver: 'http://10.60.0.112:7999/okay-upload',
        to: '/xdfapp/www/xin.static.fe.xk12.cn'
    })
})
.match('/src/(**).vue', {
    release :'$1_vue.js',
    deploy: fis.plugin('http-push', {
        receiver: 'http://10.60.0.112:7999/okay-upload',
        to: '/xdfapp/www/xin.static.fe.xk12.cn'
    })
})
.match('/node_modules/**.js', {
    release :'$0',
    deploy: fis.plugin('http-push', {
        receiver: 'http://10.60.0.112:7999/okay-upload',
        to: '/xdfapp/www/xin.static.fe.xk12.cn',
    })
});