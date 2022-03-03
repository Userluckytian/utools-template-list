
// todo: 只能将需要使用的函数写在以下三个函数的内部！
// fix: 只能将需要使用的函数写在以下三个函数的内部！
// note: 只能将需要使用的函数写在以下三个函数的内部！
// tag: 只能将需要使用的函数写在以下三个函数的内部！
// tianlk: 只能将需要使用的函数写在以下三个函数的内部！
// test: 只能将需要使用的函数写在以下三个函数的内部！






window.exports = {
    getTextColor: { // 注意：键对应的是 plugin.json 中的 features.code
        mode: "list",  // 列表模式
        args: {
            // 进入插件时调用（可选）
            enter: (action, callbackSetList) => {
                // #region 进入后直接进行取色并返回文本颜色
                function colourIsLight(r, g, b) {
                    // Counting the perceptive luminance
                    // human eye favors green color... 
                    var a = 1 - (0.299 * r + 0.587 * g + 0.114 * b) / 255;
                    console.log(a);
                    return (a < 0.5);
                }

                function getTextColorByBgColor(color) {
                    const arrayRGB = color.slice(4, color.length - 1).split(',');
                    return colourIsLight(arrayRGB[0], arrayRGB[1], arrayRGB[2]) ? '#000000' : '#FFFFFF';
                }
                utools.hideMainWindow()
                utools.screenColorPick(({ hex, rgb }) => {
                    // console.log(hex) // #FFFFFF
                    // console.log(rgb) // RGB(0, 0, 0)
                    const textColor = getTextColorByBgColor(rgb);
                    utools.copyText(textColor)
                    utools.showNotification('推荐字体颜色：' + textColor + '已复制')
                })
                // utools.outPlugin()
                // window.utools.outPlugin()
                // #endregion
                // -----------s---p---l---i---t---------line-------------
                // #region 展示多个功能列表，点击哪个就触发哪个
                // window.utools.showNotification('Hi, uTools')
                // 如果进入插件就要显示列表数据： 相当于默认进去后只展示一项
                // callbackSetList([
                //     {
                //         title: '获取字体颜色',
                //         description: '根据获取的颜色选择合适颜色的文本',
                //         icon: '' // 图标(可选)
                //     },
                //     ......
                // ])
                // #endregion
            },
            // 【会自动触发】子输入框内容变化时被调用 可选 (未设置则无搜索)
            search: (action, searchWord, callbackSetList) => {
                // // 获取一些数据
                // // 执行 callbackSetList 显示出来
                // callbackSetList([
                //     {
                //         title: '获取字体颜色',
                //         description: '根据获取的颜色选择合适颜色的文本',
                //         icon: '' // 图标(可选)
                //     }
                // ])
            },
            // 用户选择列表中某个条目时被调用
            select: (action, itemData, callbackSetList) => {
                // function colourIsLight(r, g, b) {
                //     // Counting the perceptive luminance
                //     // human eye favors green color... 
                //     var a = 1 - (0.299 * r + 0.587 * g + 0.114 * b) / 255;
                //     console.log(a);
                //     return (a < 0.5);
                // }

                // function getTextColorByBgColor(color) {
                //     const arrayRGB = color.slice(4, color.length - 1).split(',');
                //     return colourIsLight(arrayRGB[0], arrayRGB[1], arrayRGB[2]) ? '#000000' : '#FFFFFF';
                // }
                // window.utools.hideMainWindow()
                // window.utools.screenColorPick(({ hex, rgb }) => {
                //     // console.log(hex) // #FFFFFF
                //     // console.log(rgb) // RGB(0, 0, 0)
                //     const textColor = getTextColorByBgColor(rgb);
                //     window.utools.copyText(textColor)
                //     window.utools.showNotification('颜色' + textColor + '已复制')
                //     setTimeout(() => {
                //         window.utools.outPlugin()
                //     }, 100);
                // })
            },
            // 子输入框为空时的占位符，默认为字符串"搜索"
            placeholder: "搜索"
        }
    }
}