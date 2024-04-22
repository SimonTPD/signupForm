/*This snippet of code displays the side image div width
and the content/center div width, as well as the ratio of the
side image div width over the sum of both widths. The values
automatically get updated as the window is resized.
This is useful to see if the flexbox dynamic resizing works
as expected.
*/
const pageBody = document.querySelector("body");
const divSideContent = document.querySelector("div.side-content");
const divCenterContent = document.querySelector("div.center-content");
const divWidthInfoPara = document.createElement("p");
pageBody.appendChild(divWidthInfoPara);

const pageWindow = document.defaultView;
/*pageWindow.addEventListener("resize", logDivWidth);*/

function logDivWidth(){
    let divSideContentWidth = window.getComputedStyle(divSideContent).width;
    let divCenterContentWidth = window.getComputedStyle(divCenterContent).width;

    divSideContentWidth = +(divSideContentWidth.split('p')[0]);
    divCenterContentWidth = +(divCenterContentWidth.split('p')[0]);

    divWidthInfoPara.innerText = `Side width: ${divSideContentWidth}
        Center width ${divCenterContentWidth}
        Ratio: ${divSideContentWidth / (divSideContentWidth + divCenterContentWidth)}`;
}