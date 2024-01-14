const convertTemperature = (temperature, unit) => {
    if (unit === "C") {
        // Chuyển từ Celsius sang Fahrenheit
        return (temperature * 9/5) + 32;
    } else if (unit === "F") {
        // Chuyển từ Fahrenheit sang Celsius
        return (temperature - 32) * 5/9;
    } else {
        // Đơn vị nhiệt độ không hợp lệ
        return "Đơn vị nhiệt độ không hợp lệ";
    }
};

// Ví dụ sử dụng:
const celsiusTemperature = 30;
const fahrenheitTemperature = 100;

const convertedToFahrenheit = convertTemperature(celsiusTemperature, "C");
const convertedToCelsius = convertTemperature(fahrenheitTemperature, "F");

console.log(`${celsiusTemperature}°C là ${convertedToFahrenheit}°F`);
console.log(`${fahrenheitTemperature}°F là ${convertedToCelsius}°C`);
