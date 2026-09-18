/* Chernobyl Automotriz — simple ES/EN text toggle.
   Add data-i18n="key" to any element; this script swaps its text
   between the Spanish and English versions below and remembers the
   visitor's choice (localStorage) across every page on the site. */
(function () {
  var I18N = {
  "nav.nosotros": {
    "es": "Sobre Nosotros",
    "en": "About Us"
  },
  "nav.lubricantes": {
    "es": "Lubricantes",
    "en": "Lubricants"
  },
  "nav.auto": {
    "es": "Auto",
    "en": "Auto"
  },
  "nav.camion": {
    "es": "Camión",
    "en": "Truck"
  },
  "nav.cuidado": {
    "es": "Cuidado",
    "en": "Care"
  },
  "nav.taller": {
    "es": "Taller",
    "en": "Workshop"
  },
  "nav.contacto": {
    "es": "Contacto",
    "en": "Contact"
  },
  "nav.lang_es": {
    "es": "ES",
    "en": "ES"
  },
  "nav.lang_en": {
    "es": "EN",
    "en": "EN"
  },
  "common.canal_directo": {
    "es": "CANAL DIRECTO",
    "en": "DIRECT CHANNEL"
  },
  "common.footer": {
    "es": "Chernobyl Automotriz • Lealtad esq. Zanja, Centro Habana • Teléfono: 50067697",
    "en": "Chernobyl Automotriz • Lealtad & Zanja, Centro Habana • Phone: 50067697"
  },
  "common.pedir_whatsapp": {
    "es": "Pedir Ahora — WhatsApp",
    "en": "Order Now — WhatsApp"
  },
  "common.pedir_correo": {
    "es": "Pedir Ahora — Correo",
    "en": "Order Now — Email"
  },
  "common.whatsapp_label": {
    "es": "WhatsApp",
    "en": "WhatsApp"
  },
  "common.facebook_label": {
    "es": "Facebook",
    "en": "Facebook"
  },
  "common.instagram_label": {
    "es": "Instagram",
    "en": "Instagram"
  },
  "title.index": {
    "es": "Chernobyl Automotriz — Zona de Acceso",
    "en": "Chernobyl Automotriz — Access Zone"
  },
  "index.statusbar.sector": {
    "es": "SECTOR: CENTRO HABANA",
    "en": "SECTOR: CENTRO HABANA"
  },
  "index.statusbar.geiger": {
    "es": "NIVEL DE RADIACIÓN: ESTABLE",
    "en": "RADIATION LEVEL: STABLE"
  },
  "index.hero.tape": {
    "es": "ZONA DE EXCLUSIÓN — ACCESO RESTRINGIDO",
    "en": "EXCLUSION ZONE — RESTRICTED ACCESS"
  },
  "index.nosotros.h2": {
    "es": "Sobre Nosotros",
    "en": "About Us"
  },
  "index.nosotros.p": {
    "es": "Chernobyl Mipyme SURL es una empresa cubana con sede en Centro Habana, distribuidora por menor y por mayor en toda la isla, y representante oficial de Molinol y Saka. Controlamos el paso de suministro entre Rotterdam, Beirut y Asia hasta Lealtad esquina Zanja — especialistas en lubricantes, neumáticos y baterías de alta potencia para autos y maquinaria pesada, con atención personalizada y profesional.",
    "en": "Chernobyl Mipyme SURL is a Cuban company based in Centro Habana, a retail and wholesale distributor across the island, and the official representative of Molinol and Saka. We control the supply route from Rotterdam, Beirut and Asia all the way to Lealtad and Zanja — specialists in lubricants, tires and high-power batteries for cars and heavy machinery, with personalized, professional service."
  },
  "index.nosotros.tag1": {
    "es": "Molinol",
    "en": "Molinol"
  },
  "index.nosotros.tag2": {
    "es": "Saka",
    "en": "Saka"
  },
  "index.nosotros.tag3": {
    "es": "Distribución nacional",
    "en": "Nationwide distribution"
  },
  "index.zone.h2": {
    "es": "Anomalías detectadas",
    "en": "Anomalies detected"
  },
  "index.zone.sub": {
    "es": "Cuatro hallazgos confirmados en el sector — stock sujeto a disponibilidad.",
    "en": "Four confirmed finds in the sector — stock subject to availability."
  },
  "index.card.lub.h3": {
    "es": "Lubricantes",
    "en": "Lubricants"
  },
  "index.card.lub.signal": {
    "es": "SEÑAL: ALTA",
    "en": "SIGNAL: HIGH"
  },
  "index.card.lub.p": {
    "es": "Aceites Venol, Castrol y North Sea, sintéticos y semisintéticos para motor. La reserva más estable del sector, reabastecida por ruta directa.",
    "en": "Venol, Castrol and North Sea oils, synthetic and semi-synthetic for engines. The most stable reserve in the sector, restocked via a direct route."
  },
  "index.card.lub.price": {
    "es": "Desde $6.00 (aditivos) hasta $31.00 (sintético 4L)",
    "en": "From $6.00 (additives) to $31.00 (synthetic 4L)"
  },
  "index.card.lub.link": {
    "es": "Ver lista de precios completa →",
    "en": "See full price list →"
  },
  "index.card.car.h3": {
    "es": "Neumáticos de Auto",
    "en": "Car Tires"
  },
  "index.card.car.signal": {
    "es": "SEÑAL: MEDIA",
    "en": "SIGNAL: MEDIUM"
  },
  "index.card.car.p": {
    "es": "Ling Long, Atlas, Leao, Rovelo y Vredestein para el parque automotor local, del Rin 13 al Rin 18.",
    "en": "Ling Long, Atlas, Leao, Rovelo and Vredestein for the local vehicle fleet, from Rim 13 to Rim 18."
  },
  "index.card.car.price": {
    "es": "Desde $38.00 (Rin 13) hasta $110.00 (Rin 18)",
    "en": "From $38.00 (Rim 13) to $110.00 (Rim 18)"
  },
  "index.card.car.link": {
    "es": "Ver neumáticos y baterías →",
    "en": "See tires & batteries →"
  },
  "index.card.truck.h3": {
    "es": "Neumáticos de Camión",
    "en": "Truck Tires"
  },
  "index.card.truck.signal": {
    "es": "SEÑAL: MEDIA",
    "en": "SIGNAL: MEDIUM"
  },
  "index.card.truck.p": {
    "es": "Gomas de alta resistencia para carga pesada, maquinaria y transporte comercial — ideales para ZIL 131.",
    "en": "Heavy-duty tires for freight, machinery and commercial transport — ideal for the ZIL 131."
  },
  "index.card.truck.price": {
    "es": "Cotización según medida y volumen",
    "en": "Quote based on size and volume"
  },
  "index.card.truck.link": {
    "es": "Ver neumáticos de camión →",
    "en": "See truck tires →"
  },
  "index.card.care.h3": {
    "es": "Cuidado Automotriz",
    "en": "Car Care"
  },
  "index.card.care.signal": {
    "es": "SEÑAL: ALTA",
    "en": "SIGNAL: HIGH"
  },
  "index.card.care.p": {
    "es": "Limpiadores, ceras y aditivos Venol/Molinol para mantener el vehículo protegido frente a la Zona.",
    "en": "Venol/Molinol cleaners, waxes and additives to keep your vehicle protected against the Zone."
  },
  "index.card.care.price": {
    "es": "Desde $5.00 (afloja todo) hasta $15.00 (limpiador de motor)",
    "en": "From $5.00 (penetrating spray) to $15.00 (engine cleaner)"
  },
  "index.card.care.link": {
    "es": "Ver cuidado automotriz →",
    "en": "See car care products →"
  },
  "index.taller.head": {
    "es": "INSTALACIÓN — TALLER",
    "en": "WORKSHOP — FACILITY"
  },
  "index.taller.k1": {
    "es": "Ubicación",
    "en": "Location"
  },
  "index.taller.v1": {
    "es": "Lealtad esq. Zanja",
    "en": "Lealtad & Zanja"
  },
  "index.taller.k2": {
    "es": "Servicios",
    "en": "Services"
  },
  "index.taller.v2": {
    "es": "Montaje de neumáticos, cambio de aceite",
    "en": "Tire mounting, oil changes"
  },
  "index.taller.k3": {
    "es": "Cobertura",
    "en": "Coverage"
  },
  "index.taller.v3": {
    "es": "Autos y camiones",
    "en": "Cars and trucks"
  },
  "index.contacto.head": {
    "es": "PDA — CANAL DE CONTACTO",
    "en": "PDA — CONTACT CHANNEL"
  },
  "index.contacto.k1": {
    "es": "Ubicación",
    "en": "Location"
  },
  "index.contacto.v1": {
    "es": "Lealtad esq. Zanja",
    "en": "Lealtad & Zanja"
  },
  "index.contacto.k2": {
    "es": "Frecuencia",
    "en": "Frequency"
  },
  "index.contacto.k3": {
    "es": "Correo",
    "en": "Email"
  },
  "index.contacto.k4": {
    "es": "Horario",
    "en": "Hours"
  },
  "index.contacto.v4": {
    "es": "Lun–Sáb, 9:00–17:00",
    "en": "Mon–Sat, 9:00 AM–5:00 PM"
  },
  "title.lubricantes": {
    "es": "Chernobyl Automotriz — Lubricantes",
    "en": "Chernobyl Automotriz — Lubricants"
  },
  "lub.statusbar.sector": {
    "es": "SECTOR: LUBRICANTES",
    "en": "SECTOR: LUBRICANTS"
  },
  "lub.statusbar.geiger": {
    "es": "NIVEL DE RADIACIÓN: ESTABLE",
    "en": "RADIATION LEVEL: STABLE"
  },
  "lub.subhero.tape": {
    "es": "ZONA DE EXCLUSIÓN — SUMINISTRO CONFIRMADO",
    "en": "EXCLUSION ZONE — SUPPLY CONFIRMED"
  },
  "lub.subhero.h1": {
    "es": "Lubricantes",
    "en": "Lubricants"
  },
  "lub.subhero.p": {
    "es": "Tres orígenes, una sola garantía: rendimiento que aguanta el ritmo de la Zona.",
    "en": "Three origins, one guarantee: performance that keeps up with the Zone."
  },
  "lub.brands.h2": {
    "es": "Lo que manejamos",
    "en": "What we carry"
  },
  "lub.brands.tag1": {
    "es": "Venol (Alemania)",
    "en": "Venol (Germany)"
  },
  "lub.brands.tag2": {
    "es": "Castrol",
    "en": "Castrol"
  },
  "lub.brands.tag3": {
    "es": "North Sea (Países Bajos)",
    "en": "North Sea (Netherlands)"
  },
  "lub.gallery.feature_alt": {
    "es": "Venol, la mejor opción para tu auto — solo en Chernobyl Automotriz",
    "en": "Venol, the best choice for your car — only at Chernobyl Automotriz"
  },
  "lub.gallery.cap1": {
    "es": "Venol Synthesis Premium 5W-30 — tecnología alemana, en stock.",
    "en": "Venol Synthesis Premium 5W-30 — German technology, in stock."
  },
  "lub.gallery.cap2": {
    "es": "Estantería completa: Venol, Castrol Edge y Northsea, todas las viscosidades.",
    "en": "Full shelf: Venol, Castrol Edge and Northsea, all viscosities."
  },
  "lub.plate.p": {
    "es": "Manejamos lubricantes alemanes Venol —sintéticos, semisintéticos y estándar— junto a Castrol para autos y motos, y North Sea en tambores de 200L para talleres y flotas que necesitan volumen. Toda la línea incluye anticongelante Venol en cuatro colores y grasa industrial Greaselt-4, con precio minorista y mayorista disponibles desde la primera unidad.",
    "en": "We carry German Venol lubricants — synthetic, semi-synthetic and standard — alongside Castrol for cars and motorcycles, and North Sea in 200L drums for shops and fleets that need volume. The full line includes Venol antifreeze in four colors and Greaselt-4 industrial grease, with retail and wholesale pricing available from the first unit."
  },
  "lub.price.head": {
    "es": "LISTA DE PRECIOS — LUBRICANTES",
    "en": "PRICE LIST — LUBRICANTS"
  },
  "lub.price.item1.name": {
    "es": "VENOL FULL SYNTHETIC 5W30/5W40 (1L)",
    "en": "VENOL FULL SYNTHETIC 5W30/5W40 (1L)"
  },
  "lub.price.item2.name": {
    "es": "VENOL FULL SYNTHETIC 5W30/5W40 (4L)",
    "en": "VENOL FULL SYNTHETIC 5W30/5W40 (4L)"
  },
  "lub.price.item3.name": {
    "es": "VENOL SEMISYNTHETIC 10W30 (1L)",
    "en": "VENOL SEMISYNTHETIC 10W30 (1L)"
  },
  "lub.price.item4.name": {
    "es": "VENOL STANDARD 15W40/20W50 (1L)",
    "en": "VENOL STANDARD 15W40/20W50 (1L)"
  },
  "lub.price.item5.name": {
    "es": "CASTROL 10W30/10W40/20W50 (1L)",
    "en": "CASTROL 10W30/10W40/20W50 (1L)"
  },
  "lub.price.item6.name": {
    "es": "ANTICONGELANTE VENOL -35 (1L / 5L)",
    "en": "VENOL ANTIFREEZE -35 (1L / 5L)"
  },
  "lub.price.item7.name": {
    "es": "GRASA VENOL GREASELT-4 (4.5kg)",
    "en": "VENOL GREASELT-4 GREASE (4.5kg)"
  },
  "lub.price.item8.name": {
    "es": "NORTH SEA / MOLINOL (TAMBOR 200L)",
    "en": "NORTH SEA / MOLINOL (200L DRUM)"
  },
  "lub.price.item8.value": {
    "es": "desde $750.00",
    "en": "from $750.00"
  },
  "lub.price.note.label": {
    "es": "Precios mayoristas y por volumen —",
    "en": "Wholesale and volume pricing —"
  },
  "lub.price.note.link": {
    "es": "consultar por WhatsApp →",
    "en": "ask on WhatsApp →"
  },
  "title.auto": {
    "es": "Chernobyl Automotriz — Auto",
    "en": "Chernobyl Automotriz — Auto"
  },
  "auto.statusbar.sector": {
    "es": "SECTOR: AUTO — CENTRO HABANA",
    "en": "SECTOR: AUTO — CENTRO HABANA"
  },
  "auto.statusbar.geiger": {
    "es": "SEÑAL: ALTA",
    "en": "SIGNAL: HIGH"
  },
  "auto.subhero.tape": {
    "es": "ZONA DE EXCLUSIÓN — SUMINISTRO CONFIRMADO",
    "en": "EXCLUSION ZONE — SUPPLY CONFIRMED"
  },
  "auto.subhero.h1": {
    "es": "Auto",
    "en": "Auto"
  },
  "auto.subhero.p": {
    "es": "Neumáticos y baterías para el parque automotor, directo desde la Zona hasta tu garaje.",
    "en": "Tires and batteries for your vehicle, straight from the Zone to your garage."
  },
  "auto.tires.h2": {
    "es": "Neumáticos",
    "en": "Tires"
  },
  "auto.tires.p": {
    "es": "Desde Linglong y Atlas hasta Leao y muchas más, ofrecemos una amplia gama de marcas de neumáticos para adaptarnos a tus preferencias y a las necesidades del vehículo de tus clientes.",
    "en": "From Linglong and Atlas to Leao and many more, we offer a wide range of tire brands to fit your preferences and your customers' vehicle needs."
  },
  "auto.batteries.h2": {
    "es": "Baterías",
    "en": "Batteries"
  },
  "auto.batteries.p": {
    "es": "Soluciones de baterías confiables de Vega y Masuta, diseñadas para satisfacer los diferentes requerimientos del vehículo y las preferencias del cliente.",
    "en": "Reliable battery solutions from Vega and Masuta, designed to meet different vehicle requirements and customer preferences."
  },
  "auto.filters.h2": {
    "es": "Filtros de Aceite",
    "en": "Oil Filters"
  },
  "auto.filters.p": {
    "es": "Filtros de aceite de calidad para mantener el motor protegido — disponibles en las roscas más comunes del mercado.",
    "en": "Quality oil filters to keep the engine protected — available in the most common thread sizes on the market."
  },
  "auto.brakes.h2": {
    "es": "Pastillas de Freno",
    "en": "Brake Pads"
  },
  "auto.brakes.p": {
    "es": "Pastillas de freno para Kia Picanto, compatibles con la mayoría de los modelos del parque automotor.",
    "en": "Brake pads for the Kia Picanto, compatible with most vehicles on the road."
  },
  "auto.price.filters_head": {
    "es": "PRECIOS — FILTROS Y FRENOS",
    "en": "PRICES — FILTERS & BRAKES"
  },
  "auto.price.filter1": {
    "es": "FILTRO SANKO M20x3/4",
    "en": "SANKO FILTER M20x3/4"
  },
  "auto.price.filter2": {
    "es": "FILTRO TECFIL M20x1.5",
    "en": "TECFIL FILTER M20x1.5"
  },
  "auto.price.brake1": {
    "es": "PASTILLAS KIA PICANTO (la pareja)",
    "en": "KIA PICANTO PADS (the pair)"
  },
  "auto.price.brake1.value": {
    "es": "desde $25",
    "en": "from $25"
  },
  "auto.price.tires_head": {
    "es": "PRECIOS — NEUMÁTICOS (por rin)",
    "en": "PRICES — TIRES (by rim size)"
  },
  "auto.price.rin13": {
    "es": "RIN 13",
    "en": "RIM 13"
  },
  "auto.price.rin14": {
    "es": "RIN 14",
    "en": "RIM 14"
  },
  "auto.price.rin15": {
    "es": "RIN 15",
    "en": "RIM 15"
  },
  "auto.price.rin16": {
    "es": "RIN 16",
    "en": "RIM 16"
  },
  "auto.price.rin17": {
    "es": "RIN 17",
    "en": "RIM 17"
  },
  "auto.price.rin18": {
    "es": "RIN 18",
    "en": "RIM 18"
  },
  "auto.price.rin13.v": {
    "es": "desde $38",
    "en": "from $38"
  },
  "auto.price.rin14.v": {
    "es": "desde $50",
    "en": "from $50"
  },
  "auto.price.rin15.v": {
    "es": "desde $63",
    "en": "from $63"
  },
  "auto.price.rin16.v": {
    "es": "desde $72",
    "en": "from $72"
  },
  "auto.price.rin17.v": {
    "es": "desde $79",
    "en": "from $79"
  },
  "auto.price.rin18.v": {
    "es": "desde $100",
    "en": "from $100"
  },
  "auto.price.batteries_head": {
    "es": "PRECIOS — BATERÍAS",
    "en": "PRICES — BATTERIES"
  },
  "auto.price.bat1": {
    "es": "MASUTA 60AH",
    "en": "MASUTA 60AH"
  },
  "auto.price.bat2": {
    "es": "MASUTA / VEGA 100AH",
    "en": "MASUTA / VEGA 100AH"
  },
  "auto.price.bat3": {
    "es": "MASUTA 150AH",
    "en": "MASUTA 150AH"
  },
  "auto.price.bat4": {
    "es": "MASUTA 200AH",
    "en": "MASUTA 200AH"
  },
  "auto.price.bat_note": {
    "es": "Con tres meses de garantía completa. Precios mayoristas por volumen — consultar.",
    "en": "With three months full warranty. Wholesale volume pricing — ask us."
  },
  "auto.cta.catalog": {
    "es": "Descargar Catálogo",
    "en": "Download Catalog"
  },
  "title.camion": {
    "es": "Chernobyl Automotriz — Camión",
    "en": "Chernobyl Automotriz — Truck"
  },
  "camion.statusbar.sector": {
    "es": "SECTOR: CAMIÓN — CENTRO HABANA",
    "en": "SECTOR: TRUCK — CENTRO HABANA"
  },
  "camion.statusbar.geiger": {
    "es": "SEÑAL: ALTA",
    "en": "SIGNAL: HIGH"
  },
  "camion.subhero.tape": {
    "es": "ZONA DE EXCLUSIÓN — FLOTA PESADA CONFIRMADA",
    "en": "EXCLUSION ZONE — HEAVY FLEET CONFIRMED"
  },
  "camion.subhero.h1": {
    "es": "Camión",
    "en": "Truck"
  },
  "camion.subhero.p": {
    "es": "Neumáticos de camión y carga pesada, directo desde la Zona hasta tu flota.",
    "en": "Truck and heavy-load tires, straight from the Zone to your fleet."
  },
  "camion.plate.h2": {
    "es": "Neumáticos de Camión",
    "en": "Truck Tires"
  },
  "camion.plate.p": {
    "es": "Rovelo, Vredestein, Linglong y Atlas — cubiertas de carga pesada para camiones, rastras y todoterreno, listas para el trabajo duro de la Zona.",
    "en": "Rovelo, Vredestein, Linglong and Atlas — heavy-load tires for trucks, trailers and off-road, ready for the Zone's hard work."
  },
  "camion.price.head": {
    "es": "PRECIOS — NEUMÁTICOS DE CAMIÓN",
    "en": "PRICES — TRUCK TIRES"
  },
  "camion.price.note": {
    "es": "Precios mayoristas por volumen — consultar disponibilidad.",
    "en": "Wholesale volume pricing — ask about availability."
  },
  "title.cuidado": {
    "es": "Chernobyl Automotriz — Cuidado",
    "en": "Chernobyl Automotriz — Car Care"
  },
  "cuidado.statusbar.sector": {
    "es": "SECTOR: CUIDADO — CENTRO HABANA",
    "en": "SECTOR: CARE — CENTRO HABANA"
  },
  "cuidado.statusbar.geiger": {
    "es": "SEÑAL: ALTA",
    "en": "SIGNAL: HIGH"
  },
  "cuidado.subhero.tape": {
    "es": "ZONA DE EXCLUSIÓN — UNIDAD RESTAURADA",
    "en": "EXCLUSION ZONE — UNIT RESTORED"
  },
  "cuidado.subhero.h1": {
    "es": "Cuidado Automotriz",
    "en": "Car Care"
  },
  "cuidado.subhero.p": {
    "es": "Limpiadores, ceras y aditivos Venol/Molinol para mantener tu vehículo protegido frente a la Zona.",
    "en": "Venol/Molinol cleaners, waxes and additives to keep your vehicle protected against the Zone."
  },
  "cuidado.spotlight.kicker": {
    "es": "Producto destacado",
    "en": "Featured product"
  },
  "cuidado.spotlight.h3": {
    "es": "A.M.G. Octane Booster — Venol",
    "en": "A.M.G. Octane Booster — Venol"
  },
  "cuidado.spotlight.p": {
    "es": "Tecnología alemana para motores de gasolina: optimiza la inyección de combustible, recupera potencia y rendimiento, y protege el sistema con cada tanque.",
    "en": "German technology for gasoline engines: optimizes fuel injection, restores power and performance, and protects the system with every tank."
  },
  "cuidado.spotlight.price": {
    "es": "Consultar precio",
    "en": "Ask for price"
  },
  "cuidado.plate.h2": {
    "es": "Cuidado Automotriz",
    "en": "Car Care"
  },
  "cuidado.plate.p": {
    "es": "Limpiadores, ceras y aditivos Venol/Molinol para mantener el vehículo protegido frente a la Zona — desde afloja-todo multiuso hasta limpiadores de motor e inyección, con atención personalizada y profesional.",
    "en": "Venol/Molinol cleaners, waxes and additives to keep your vehicle protected against the Zone — from multi-use penetrating spray to engine and injection cleaners, with personalized, professional service."
  },
  "cuidado.price.head": {
    "es": "PRECIOS — CUIDADO AUTOMOTRIZ",
    "en": "PRICES — CAR CARE"
  },
  "cuidado.price.item1": {
    "es": "AFLOJA TODO",
    "en": "PENETRATING SPRAY"
  },
  "cuidado.price.item2": {
    "es": "LIMPIADOR DE MOTOR",
    "en": "ENGINE CLEANER"
  },
  "cuidado.price.item3": {
    "es": "A.M.G. OCTANE BOOSTER VENOL",
    "en": "A.M.G. OCTANE BOOSTER VENOL"
  },
  "cuidado.price.item4": {
    "es": "CERAS Y ADITIVOS MOLINOL",
    "en": "MOLINOL WAXES & ADDITIVES"
  },
  "cuidado.price.item3.value": {
    "es": "Consultar",
    "en": "Ask us"
  },
  "cuidado.price.item4.value": {
    "es": "Consultar",
    "en": "Ask us"
  },
  "cuidado.price.note": {
    "es": "Precios mayoristas por volumen — consultar disponibilidad.",
    "en": "Wholesale volume pricing — ask about availability."
  },
  "title.taller": {
    "es": "Chernobyl Automotriz — Taller",
    "en": "Chernobyl Automotriz — Workshop"
  },
  "taller.statusbar.sector": {
    "es": "SECTOR: TALLER — CENTRO HABANA",
    "en": "SECTOR: WORKSHOP — CENTRO HABANA"
  },
  "taller.statusbar.geiger": {
    "es": "EN CONSTRUCCIÓN",
    "en": "UNDER CONSTRUCTION"
  },
  "taller.subhero.tape": {
    "es": "ZONA EN CONSTRUCCIÓN",
    "en": "ZONE UNDER CONSTRUCTION"
  },
  "taller.subhero.h1": {
    "es": "Taller",
    "en": "Workshop"
  },
  "taller.subhero.soon": {
    "es": "Próximamente",
    "en": "Coming Soon"
  },
  "taller.subhero.p": {
    "es": "Estamos preparando este espacio — montaje de neumáticos, cambio de aceite y más, muy pronto en Lealtad esq. Zanja.",
    "en": "We're getting this space ready — tire mounting, oil changes and more, coming soon to Lealtad & Zanja."
  },
  "taller.team.h2": {
    "es": "El Equipo",
    "en": "The Team"
  },
  "taller.team.sub": {
    "es": "Pronto en el taller de la Zona.",
    "en": "Coming soon to the Zone's workshop."
  },
  "taller.plate.h2": {
    "es": "Instalación — Taller",
    "en": "Facility — Workshop"
  },
  "taller.plate.p": {
    "es": "Montaje de neumáticos y cambio de aceite para autos y camiones, en Lealtad esq. Zanja, Centro Habana. Detalles completos muy pronto.",
    "en": "Tire mounting and oil changes for cars and trucks, at Lealtad & Zanja, Centro Habana. Full details coming soon."
  },
  "taller.cta.ask": {
    "es": "Preguntar — WhatsApp",
    "en": "Ask — WhatsApp"
  }
};

  function applyLang(lang) {
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'es');
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute('data-i18n');
      var entry = I18N[key];
      if (entry && entry[lang]) {
        nodes[i].textContent = entry[lang];
      }
    }
    var titleEl = document.querySelector('title[data-i18n]');
    if (titleEl) {
      var tKey = titleEl.getAttribute('data-i18n');
      if (I18N[tKey] && I18N[tKey][lang]) document.title = I18N[tKey][lang];
    }
    var toggles = document.querySelectorAll('.lang-toggle a');
    for (var j = 0; j < toggles.length; j++) {
      var isActive = toggles[j].getAttribute('data-lang') === lang;
      toggles[j].classList.toggle('current', isActive);
    }
    try { localStorage.setItem('chernobyl_lang', lang); } catch (e) {}
  }

  function initLangToggle() {
    var saved = 'es';
    try { saved = localStorage.getItem('chernobyl_lang') || 'es'; } catch (e) {}
    applyLang(saved);

    var toggles = document.querySelectorAll('.lang-toggle a');
    for (var i = 0; i < toggles.length; i++) {
      toggles[i].addEventListener('click', function (ev) {
        ev.preventDefault();
        applyLang(this.getAttribute('data-lang'));
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLangToggle);
  } else {
    initLangToggle();
  }
})();
