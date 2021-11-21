const ingresos = [
	new Ingreso('Salario', 2100000.00),
	new Ingreso('Venta reloj', 150000)
];

const egresos = [
	new Egreso('Renta departamento', 900000),
	new Egreso('Ropa', 200000)
];

let cargarApp = () => {
	cargarCabecero();
}

let totalIngresos = () => {
	let totalIngreso = 0;
	for (let ingreso of ingresos) {
		totalIngreso += ingreso.valor;
	}
	return totalIngreso;
}

let totalEgresos = () => {
	let totalEgreso = 0;
	for (let egreso of egresos) {
		totalEgreso += egreso.valor;
	}
	return totalEgreso;
}

let cargarCabecero = () => {
	let presupuesto = totalIngresos() - totalEgresos();
	let porcentajeEgreso = totalEgresos() / totalIngresos();
	document.getElementById('presupuesto').innerHTML = presupuesto;
	document.getElementById('porcentaje').innerHTML = porcentajeEgreso;
	document.getElementById('ingresos').innerHTML = totalIngresos();
	document.getElementById('egresos').innerHTML = totalEgresos();
}