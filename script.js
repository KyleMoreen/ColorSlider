const hueValue = document.getElementById("hue-value");
const saturationValue = document.getElementById("saturation-value");
const lightnessValue = document.getElementById("lightness-value");

function changeHsl() {
    const hue = document.getElementById("hue-slider");
    document.body.style.setProperty("--hue", hue.value);
    hueValue.innerText = hue.value;

    const saturation = document.getElementById("saturation-slider");
    document.body.style.setProperty("--saturation", saturation.value + "%");
    saturationValue.innerText = saturation.value + "%";

    const lightness = document.getElementById("lightness-slider");
    document.body.style.setProperty("--lightness", lightness.value + "%");
    lightnessValue.innerText = lightness.value + "%";
}