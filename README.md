# UnitEase

A lightweight JavaScript library for unit conversion.

- Converts units for length, weight, temperature, and more.
- Supports both metric and imperial systems.

**Example:**

```js
unitEase.convert(10, "meters", "feet");
```

---

## **Features**

- Convert between various units for **length**, **weight**, **temperature**, and **time**.
- Check if a conversion is supported between two units.

---

## **Installation**

UnitEase can be installed via npm:

```bash
npm install unitease
```

---

## **Usage**

### **Import UnitEase**

```js
const UnitEase = require("unitease");
```

### **Convert Units**

```js
// Convert 10 kilograms to feet
const result = UnitEase.convert(10, "kilograms", "pounds");
console.log(result); // Output: 22.0462
```

### **Check Conversion Support**

```js
// Check if a conversion from meters to feet is supported
const isSupported = UnitEase.supports("meters", "feet");
console.log(isSupported); // Output: true
```

### **Examples**

```js
// Length
console.log(UnitEase.convert(100, "meters", "feet")); // 328.084

// Weight
console.log(UnitEase.convert(5, "kilograms", "pounds")); // 11.0231

// Temperature
console.log(UnitEase.convert(100, "celsius", "fahrenheit")); // 212

// Time
console.log(UnitEase.convert(2, "hours", "minutes")); // 120

// Unsupported conversion
console.log(UnitEase.supports("kilograms", "miles")); // false
```

---

## **Supported Units**

### **Length**

- `feet`
- `inches`
- `yards`
- `miles`
- `meters`
- `kilometers`
- `centimeters`
- `millimeters`

### **Weight**

- `kilograms`
- `milligrams`
- `grams`
- `pounds`
- `ounces`

### **Temperature**

- `celsius`
- `fahrenheit`
- `kelvin`

### **Time**

- `seconds`
- `minutes`
- `hours`
- `days`
- `weeks`
- `years`

---

## **How It Works**

1. The `convert` function checks the relevant unit type (`length`, `weight`, `temperature`, or `time`) and performs the conversion.

2. The `supports` function verifies if a conversion between the given units is possible.

---

## **Contributing**

Contributions are welcome! If you want to fix a bug, add more units for conversion or just improve UnitEase, feel free to create a pull request!

---

## **License**

MIT License

---

**Made with ❤️ by [Irtaza](https://github.com/Irtaza2009)**
