import wixWindow from 'wix-window';
import wixAnimations from 'wix-animations';
$w.onReady(function () {
    initMaouseTrailRepeater();
});
async function initMaouseTrailRepeater() {
    const deviceType = wixWindow.formFactor;
    if (deviceType !== 'Desktop') return;
    const windowInfo = await getWindowSize();
    const repeater = $w('#mouseTrailRepeater');
    const repeaterItems = [];
    const repItemSize = 50 // 50px width on 50px height
    const totalItems = (windowInfo.width / repItemSize) * (windowInfo.height / repItemSize);
    console.log('Total items: ', totalItems);
    //*** Creating new items to fill the repeater ***//
    for (let index = 0; index < totalItems; index++) {
        repeaterItems.push({ _id: index.toString() });
    }
    // Setting the hover animation
    repeater.onItemReady(($item) => {
        const item = $item('#mouseTrailRepItem');
        item.onMouseIn(() => {
            wixAnimations.timeline()
                .add(item, { opacity: 0.01, duration: 0.1 })
                .play();
        });
        item.onMouseOut(() => {
            wixAnimations.timeline()
                .add(item, { opacity: 1, duration: 500 })
                .play();
        })
    });
    //*** Adding the new elements to the repeater ***//
    repeater.data = repeaterItems;
    $w('#repeaterWrapper').style.backgroundColor = '#00000000'; // Transparent
}
async function getWindowSize() {
    return await wixWindow.getBoundingRect().then(windowInfo => {
        return {
            width: windowInfo.window.width,
            height: windowInfo.window.height,
        };
    })
}