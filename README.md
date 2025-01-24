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

### **Check Possible Conversions**

```js
// Get possible conversions for a temperature unit
console.log(UnitEase.getPossibleConversions("celsius"));
// Output: ['fahrenheit', 'kelvin']
```

#### **Example Scenerios**

1. Find all the valid conversions for a specific unit:

   ```js
   const possibilities = UnitEase.getPossibleConversions("meters");
   console.log(`You can convert meters to: ${possibilities.join(", ")}`);
   // Output: You can convert meters to: feet, inches
   ```

2. Handle unsupported units gracefully:

   ```js
   const possibilities = UnitEase.getPossibleConversions("lightyears");
   if (possibilities.length === 0) {
     console.log("No conversions available for this unit.");
   }
   // Output: No conversions available for this unit.
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

3. The `getPossibleConversions` function lists all the units that a given unit can be converted to.

---

## **Contributing**

Contributions are welcome! If you want to fix a bug, add more units for conversion or just improve UnitEase, feel free to create a pull request!

---

## **License**

MIT License

---

**Made with ❤️ by [Irtaza](https://github.com/Irtaza2009)**
