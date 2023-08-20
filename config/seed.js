require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: '▪CPU', sortOrder: 10},
    {name: '▪GPU', sortOrder: 20},
    {name: '▪Motherboard', sortOrder: 30},
    {name: '▪SSD', sortOrder: 40},
    {name: '▪Power', sortOrder: 50},
    {name: '▪Keyboard', sortOrder: 60},
    {name: '▪Monitor', sortOrder: 70},
    {name: '▪Mouse', sortOrder: 80},
    {name: '▪Custom Built', sortOrder: 90},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Intel Core i9-12900K - Core i9 12th Gen Alder Lake 16-Core (8P+8E) 3.2 GHz LGA 1700 125W Intel UHD Graphics 770 Desktop Processor - BX8071512900K', emoji: '', category: categories[0], image: 'https://i.imgur.com/Erhhhln.jpg', price: 426.98},
    {name: 'Intel Core i7-13700K - Core i7 13th Gen Raptor Lake 16-Core (8P+8E) P-core Base Frequency: 3.4 GHz E-core Base Frequency: 2.5 GHz LGA 1700 125W Intel UHD Graphics 770 Desktop Processor - BX8071513700K', emoji: '', category: categories[0], image: 'https://i.imgur.com/zvNfrWZ.jpg', price: 409.80},
    {name: 'Intel Core i7-12700KF - Core i7 12th Gen Alder Lake 12-Core (8P+4E) 3.6 GHz LGA 1700 125W Desktop Processor - BX8071512700KF', emoji: '', category: categories[0], image: 'https://i.imgur.com/M2O2Pkm.jpg', price: 288.99},
    {name: 'Intel Core i5-12400F - Core i5 12th Gen Alder Lake 6-Core 2.5 GHz LGA 1700 65W Desktop Processor - BX8071512400F', emoji: '', category: categories[0], image: 'https://i.imgur.com/R6q8IYQ.jpg', price: 149.98},
    {name: 'Intel Core i5-13600K - Core i5 13th Gen Raptor Lake 14-Core (6P+8E) 3.5 GHz LGA 1700 125W Intel UHD Graphics 770 Desktop Processor - BX8071513600K', emoji: '', category: categories[0], image: 'https://i.imgur.com/CSCSV3t.jpg', price: 317.99},
    {name: 'AMD Ryzen 9 5900X - Ryzen 9 5000 Series Vermeer (Zen 3) 12-Core 3.7 GHz Socket AM4 105W None Integrated Graphics Desktop Processor - 100-100000061WOF', emoji: '', category: categories[0], image: 'https://i.imgur.com/uN3CjId.png', price: 355.42},
    {name: 'AMD Ryzen 9 7950X3D - Ryzen 9 7000 Series 16-Core 4.2 GHz Socket AM5 120W AMD Radeon Graphics Desktop Processor - 100-100000908WOF', emoji: '', category: categories[0], image: 'https://i.imgur.com/sNRWTxt.png', price: 699.00},
    {name: 'AMD Ryzen 7 5800X - Ryzen 7 5000 Series Vermeer (Zen 3) 8-Core 3.8 GHz Socket AM4 105W None Integrated Graphics Desktop Processor - 100-100000063WOF', emoji: '', category: categories[0], image: 'https://i.imgur.com/k6ATWNp.jpg', price: 220.50},
    {name: 'AMD Ryzen Threadripper PRO 5975WX - Ryzen Threadripper PRO Chagall PRO (Zen 3) 32-Core 3.6 GHz Socket sWRX8 280W Desktop Processor - 100-100000445WOF', emoji: '', category: categories[0], image: 'https://i.imgur.com/gNXjj9v.jpg', price: 2899.99},
    {name: 'Intel Core i9-13900K - Core i9 13th Gen Raptor Lake 24-Core (8P+16E) P-core Base Frequency: 3.0 GHz E-core Base Frequency: 2.2 GHz LGA 1700 125W Intel UHD Graphics 770 Desktop Processor - BX8071513900K', emoji: '', category: categories[0], image: 'https://i.imgur.com/QfWzKhP.jpg', price: 568.98},

    {name: 'MSI Ventus GeForce RTX 3060 Ti 8GB GDDR6 PCI Express 4.0 Video Card RTX 3060 Ti VENTUS 3X 8G OC LHR', emoji: '', category: categories[1], image: 'https://i.imgur.com/38NWXIF.jpg', price: 349.00},
    {name: 'ZOTAC GAMING GeForce RTX 4070 Ti Trinity OC DLSS 3 12GB GDDR6X 192-bit 21 Gbps PCIE 4.0 Gaming Graphics Card, IceStorm 2.0 Advanced Cooling, SPECTRA 2.0 RGB Lighting, ZT-D40710J-10P', emoji: '', category: categories[1], image: 'https://i.imgur.com/GUF7AcA.jpg', price: 789.99},
    {name: 'ASUS ROG Strix GeForce RTX 4080 OC Edition Gaming Graphics Card (PCIe 4.0, 16GB GDDR6X, HDMI 2.1a, DisplayPort 1.4a) ROG-STRIX-RTX4080-O16G-GAMING', emoji: '', category: categories[1], image: 'https://i.imgur.com/npsXRSJ.jpg', price: 1417.99},
    {name: 'MSI Ventus GeForce RTX 3050 8GB GDDR6 PCI Express 4.0 Video Card RTX 3050 Ventus 2X 8G OC', emoji: '', category: categories[1], image: 'https://i.imgur.com/vym4Z1y.jpg', price: 274.99},
    {name: 'PNY Technologies, Inc. VCQRTX6000PB PNY VCX VCQRTX6000-PB QUADRO RTX 6000 GCARD SCB', emoji: '', category: categories[1], image: 'https://i.imgur.com/VOlcTbt.jpg', price: 4796.00},
    {name: 'MSI Suprim GeForce RTX 4070 Ti 12GB GDDR6X PCI Express 4.0 Video Card RTX 4070 Ti SUPRIM X 12G', emoji: '', category: categories[1], image: 'https://i.imgur.com/B8fBSgU.jpg', price: 849.99},
    {name: 'PNY GeForce RTX 4070 Ti 12GB XLR8 Gaming VERTO EPIC-X RGB Overclocked Triple Fan Graphics Card DLSS 3', emoji: '', category: categories[1], image: 'https://i.imgur.com/7LH5E8B.jpg', price: 809.99},
    
    {name: 'Asus B550-F ROG Strix Gaming', emoji: '', category: categories[2], image: 'https://i.imgur.com/OJHbluJ.png', price: 179.99},
    {name: 'Gigabyte Z790 Aorus Master', emoji: '', category: categories[2], image: 'https://i.imgur.com/JUMr7gj.png', price: 459.99},
    {name: 'Asus ROG Maximus Z790 Hero', emoji: '', category: categories[2], image: 'https://i.imgur.com/dn1h43P.jpg', price: 629.99},
    {name: 'Asus Z790-A Prime WiFi Intel', emoji: '', category: categories[2], image: 'https://i.imgur.com/kNUH1Pu.png', price: 311.95},
    {name: 'Gigabyte Z590 Aorus Elite AX', emoji: '', category: categories[2], image: 'https://i.imgur.com/XVJFr1X.jpg', price: 143.99},
    {name: 'Gigabyte B550M Aorus Elite AM4', emoji: '', category: categories[2], image: 'https://i.imgur.com/2jJeqLp.jpg', price: 119.40},
    {name: 'Asus B550-A ROG Strix Gaming', emoji: '', category: categories[2], image: 'https://i.imgur.com/MBk9EnV.jpg', price: 185.54},
  
    {name: 'PNY CS1030 - SSD - 2 TB', emoji: '', category: categories[3], image: 'https://i.imgur.com/pXRKCZQ.png', price: 69.99},
    {name: 'Samsung 870 Evo 500gb', emoji: '', category: categories[3], image: 'https://i.imgur.com/FlKDV4V.jpg', price: 50.43},
    {name: 'Samsung 970 Evo Plus 1 TB', emoji: '', category: categories[3], image: 'https://i.imgur.com/rpa79bq.jpg', price: 95.08},
    {name: 'WD Blue SA510 SATA SSD 250GB', emoji: '', category: categories[3], image: 'https://i.imgur.com/g6tMC5s.jpg', price: 34.99},
    {name: 'SanDisk SSD Plus 2.5" 1TB', emoji: '', category: categories[3], image: 'https://i.imgur.com/x8bbWsE.jpg', price: 81.00},
    {name: 'Samsung T5 1TB Portable', emoji: '', category: categories[3], image: 'https://i.imgur.com/BXDt5aW.jpg', price: 199.99},
    {name: 'Team Group EX2 2.5" 2TB', emoji: '', category: categories[3], image: 'https://i.imgur.com/FvS0eY1.jpg', price: 69.99},
    
    {name: 'Thermaltake Smart 80 Plus 700W', emoji: '', category: categories[4], image: 'https://i.imgur.com/WWbtzRT.jpg', price: 51.99},
    {name: 'Thermaltake Smart SP-600AH2NKW', emoji: '', category: categories[4], image: 'https://i.imgur.com/S5D2GYa.jpg', price: 44.99},
    {name: 'Thermaltake - Smart 700W ATX', emoji: '', category: categories[4], image: 'https://i.imgur.com/fI8inzR.jpg', price: 51.99},
    {name: 'Gigabyte GP-UD750GM 750 W', emoji: '', category: categories[4], image: 'https://i.imgur.com/xrF4hsu.png', price: 118.99},
    {name: 'Thermaltake Toughpower GF1 750W', emoji: '', category: categories[4], image: 'https://i.imgur.com/95fOCdN.png', price: 120.99},
    {name: 'EVGA Supernova 1000 GT 1000W', emoji: '', category: categories[4], image: 'https://i.imgur.com/uOx5a8S.jpg', price: 169.99},
    {name: 'Corsair RM Series RM850', emoji: '', category: categories[4], image: 'https://i.imgur.com/Tqt5ITF.jpg', price: 138.99},
  
    {name: 'HyperX Alloy Core RGB Gaming Keyboard', emoji: '', category: categories[5], image: 'https://i.imgur.com/NUOuIIK.jpg', price: 34.99},
    {name: 'Asus ROG Azoth Gaming Keyboard', emoji: '', category: categories[5], image: 'https://i.imgur.com/u2rDvB4.jpg', price: 210.99},
    {name: 'Razer Cynosa V2 RGB Gaming Keyboard', emoji: '', category: categories[5], image: 'https://i.imgur.com/6Q0bFsG.jpg', price: 136.99},
    {name: 'Keychron K2 84 Gateron Mechanical Keyboard', emoji: '', category: categories[5], image: 'https://i.imgur.com/A0GcEMf.jpg', price: 71.99},
    {name: 'Logitech K845 Mechanical Illuminated Keyboard', emoji: '', category: categories[5], image: 'https://i.imgur.com/DMDsX00.jpg', price: 59.99},
    {name: 'Redragon K556 RGB LED Backlit', emoji: '', category: categories[5], image: 'https://i.imgur.com/QdgVK8a.jpg', price: 59.99},
    {name: 'SteelSeries Apex 9 Mini Keyboard', emoji: '', category: categories[5], image: 'https://i.imgur.com/CV1dqdN.png', price: 129.99},
    
    {name: 'Samsung Odyssey G9 49" Curved Gaming Monitor', emoji: '', category: categories[6], image: 'https://i.imgur.com/FsRFXep.jpg', price: 999.99},
    {name: 'Acer - Nitro xf243y Pbmiiprx 23.8" ', emoji: '', category: categories[6], image: 'https://i.imgur.com/Ug54z4H.jpg', price: 129.99},
    {name: 'Samsung 49 inch CRG9 Curved Gaming Monitor', emoji: '', category: categories[6], image: 'https://i.imgur.com/H9GudyE.jpg', price: 899.99},
    {name: 'M32UC 32" 144Hz (160Hz OC) 4K UHD Curved', emoji: '', category: categories[6], image: 'https://i.imgur.com/LGS1jbp.jpg', price: 579.99},
    {name: 'Samsung 34" G85SB OLED Curved Smart Gaming Monitor', emoji: '', category: categories[6], image: 'https://i.imgur.com/MH3jmZL.jpg', price: 1499.99},
    {name: 'Samsung 24" LED Monitor', emoji: '', category: categories[6], image: 'https://i.imgur.com/UIUKqV5.jpg', price: 119.99},
    {name: 'Samsung - 27" Odyssey G40B', emoji: '', category: categories[6], image: 'https://i.imgur.com/l3qI0qc.jpg', price: 333.00},
  
    {name: 'Logitech - G502 Hero SE Wired Optical Gaming Mouse', emoji: '', category: categories[7], image: 'https://i.imgur.com/pzxcqnd.jpg', price: 49.99},
    {name: 'Redragon - M987-K Lightweight Wired Optical', emoji: '', category: categories[7], image: 'https://i.imgur.com/fX7Akq8.jpg', price: 26.99},
    {name: 'Logitech G Pro Wireless Gaming Mouse', emoji: '', category: categories[7], image: 'https://i.imgur.com/nzD62BW.jpg', price: 185.00},
    {name: 'HyperX Pulsefire Haste Gaming Mouse', emoji: '', category: categories[7], image: 'https://i.imgur.com/ICYYoxb.jpg', price: 49.99},
    {name: 'Corsair - Scimitar RGB Wired Optical Gaming Mouse', emoji: '', category: categories[7], image: 'https://i.imgur.com/X8n84tO.jpg', price: 79.99},
    {name: 'Razer Naga V2 Pro - Wireless MMO Gaming Mouse', emoji: '', category: categories[7], image: 'https://i.imgur.com/fAgpj68.jpg', price: 179.99},
    {name: 'SteelSeries Aerox 3 18000 dpi Wireless Gaming Mouse', emoji: '', category: categories[7], image: 'https://i.imgur.com/ngI3xef.jpg', price: 138.99},

    {name: 'iBUYPOWER Gaming Desktop SlateMono 239i Intel Core i5 11th Gen 11400F (2.60GHz) 8GB DDR4 480 GB SATA SSD NVIDIA GeForce GTX 1050 Ti Windows 11 Home 64-bit', emoji: '', category: categories[8], image: 'https://i.imgur.com/O76OTeR.jpg', price: 605.99},
    {name: 'ABS Gladiator Gaming PC - Intel i7 11700KF - GeForce RTX 3070 - 16GB RGB DDR4 3200MHz - 1TB M.2 NVMe SSD', emoji: '', category: categories[8], image: 'https://i.imgur.com/D48j4Vr.jpg', price: 1399.00},
    {name: 'ABS Master Gaming PC - Intel i7 11700F - GeForce RTX 3060 Ti - 16GB DDR4 3000MHz - 1TB M.2 NVMe SSD', emoji: '', category: categories[8], image: 'https://i.imgur.com/OLrAhRY.jpg', price: 1149.99},
    {name: 'SUPERMICRO GPU/CAD 3D Design Workstation, 64-Core/128-Thread, 128GB (4x32GB) DDR4 Memory, 2TB NVMe SSD, 4TB Toshiba HDD, 2X Zotac RTX 3070 8G GPU Windows 10 pro Installed', emoji: '', category: categories[8], image: 'https://i.imgur.com/uEyi5yE.jpg', price: 8947.12},
    {name: 'CyberpowerPC Gaming Desktop Gamer Xtreme GX60310LQ Intel Core i7 11th Gen 11700K (3.60GHz) 16GB DDR4 1 TB NVMe SSD NVIDIA GeForce RTX 3080 Windows 11 Home 64-bit', emoji: '', category: categories[8], image: 'https://i.imgur.com/HjKBuIJ.jpg', price: 1649.99},
    {name: 'ABS Gladiator Gaming PC - Windows 10 Home - Intel i7 11700K - EVGA GeForce RTX 3080 FTW3 Ultra Gaming - G.Skill TridentZ RGB 16GB DDR4 3200MHz - 1TB Intel 670P M.2 NVMe SSD - 240MM RGB AIO', emoji: '', category: categories[8], image: 'https://i.imgur.com/QclPW5y.jpg', price: 1999.99},
    {name: 'Acer Gaming Desktop Predator PO7-640-UR12 Intel Core i9 12th Gen 12900K (3.20GHz) 32GB DDR5 2TB 7200RPM SATA III Hard Drive HDD 1 TB M.2 PCIe Gen 4 SSD SSD NVIDIA GeForce RTX 3090 Windows 11 Pro', emoji: '', category: categories[8], image: 'https://i.imgur.com/gXEO0jT.png', price: 3437.52},


  ]);

  console.log(items)

  process.exit();

})();