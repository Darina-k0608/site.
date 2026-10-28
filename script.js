document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
    });
});

function rnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function nz(min, max) {
    let v = 0;
    while (v === 0) v = rnd(min, max);
    return v;
}

function updateMath() {
    if (window.MathJax && window.MathJax.typesetPromise) {
        MathJax.typesetPromise();
    }
}

function generateTask1() {
    const x1 = rnd(-5, 5), y1 = rnd(-5, 5), z1 = rnd(-5, 5);
    const x2 = rnd(-5, 5), y2 = rnd(-5, 5), z2 = rnd(-5, 5);
    document.getElementById('task1').innerHTML = `
        Составьте каноническое уравнение прямой, проходящей через точки
        $M_1(${x1};\\, ${y1};\\, ${z1})$ и $M_2(${x2};\\, ${y2};\\, ${z2})$.
        Найдите координаты направляющего вектора $\\vec{s}$.
    `;
    document.getElementById('img1').src =
        'https://placehold.co/700x320/667eea/ffffff?text=Прямая+M1M2+в+пространстве&font=roboto';
    updateMath();
}

function generateTask2() {
    const x0 = rnd(-3, 3), y0 = rnd(-3, 3), z0 = rnd(-3, 3);
    const a = nz(-3, 3), b = nz(-3, 3), c = nz(-3, 3);
    const m = nz(-3, 3), n = nz(-3, 3), p = nz(-3, 3);
    document.getElementById('task2').innerHTML = `
        Найдите расстояние от точки $M_0(${x0};\\, ${y0};\\, ${z0})$
        до прямой, заданной уравнением:
        $$\\frac{x - ${a}}{${m}} = \\frac{y - ${b}}{${n}} = \\frac{z - ${c}}{${p}}$$
    `;
    document.getElementById('img2').src =
        'https://placehold.co/700x320/764ba2/ffffff?text=Расстояние+от+точки+до+прямой&font=roboto';
    updateMath();
}

function generateTask3() {
    const A = [rnd(-4, 4), rnd(-4, 4), rnd(-4, 4)];
    const B = [rnd(-4, 4), rnd(-4, 4), rnd(-4, 4)];
    const C = [rnd(-4, 4), rnd(-4, 4), rnd(-4, 4)];
    document.getElementById('task3').innerHTML = `
        Составьте общее уравнение плоскости, проходящей через три точки:
        $$A(${A[0]};\\, ${A[1]};\\, ${A[2]}),\\quad
          B(${B[0]};\\, ${B[1]};\\, ${B[2]}),\\quad
          C(${C[0]};\\, ${C[1]};\\, ${C[2]})$$
    `;
    document.getElementById('img3').src =
        'https://placehold.co/700x320/667eea/ffffff?text=Плоскость+через+3+точки&font=roboto';
    updateMath();
}

function generateTask4() {
    const x0 = rnd(-4, 4), y0 = rnd(-4, 4), z0 = rnd(-4, 4);
    const A = nz(-4, 4), B = nz(-4, 4), C = nz(-4, 4), D = rnd(-10, 10);
    document.getElementById('task4').innerHTML = `
        Найдите расстояние от точки $M(${x0};\\, ${y0};\\, ${z0})$
        до плоскости, заданной уравнением:
        $$ ${A}x ${B >= 0 ? '+' : '-'} ${Math.abs(B)}y ${C >= 0 ? '+' : '-'} ${Math.abs(C)}z ${D >= 0 ? '+' : '-'} ${Math.abs(D)} = 0 $$
    `;
    document.getElementById('img4').src =
        'https://placehold.co/700x320/764ba2/ffffff?text=Расстояние+от+точки+до+плоскости&font=roboto';
    updateMath();
}

function generateTask5() {
    const m1 = [nz(-4, 4), nz(-4, 4), nz(-4, 4)];
    const m2 = [nz(-4, 4), nz(-4, 4), nz(-4, 4)];
    document.getElementById('task5').innerHTML = `
        Найдите угол между скрещивающимися прямыми, если известны
        координаты их направляющих векторов:
        $$\\vec{m}_1 = \\{${m1[0]};\\, ${m1[1]};\\, ${m1[2]}\\},\\quad
          \\vec{m}_2 = \\{${m2[0]};\\, ${m2[1]};\\, ${m2[2]}\\}$$
    `;
    document.getElementById('img5').src =
        'https://placehold.co/700x320/667eea/ffffff?text=Угол+между+прямыми&font=roboto';
    updateMath();
}

function generateTask6() {
    const c = [nz(-4, 4), nz(-4, 4), nz(-4, 4)];
    const n = [nz(-4, 4), nz(-4, 4), nz(-4, 4)];
    document.getElementById('task6').innerHTML = `
        Найдите угол между прямой и плоскостью. Известно, что
        направляющий вектор прямой $\\vec{c} = \\{${c[0]};\\, ${c[1]};\\, ${c[2]}\\}$,
        а вектор нормали плоскости $\\vec{n} = \\{${n[0]};\\, ${n[1]};\\, ${n[2]}\\}$.
    `;
    document.getElementById('img6').src =
        'https://placehold.co/700x320/764ba2/ffffff?text=Угол+прямая-плоскость&font=roboto';
    updateMath();
}

function generateTask7() {
    const n1 = [nz(-4, 4), nz(-4, 4), nz(-4, 4)];
    const n2 = [nz(-4, 4), nz(-4, 4), nz(-4, 4)];
    document.getElementById('task7').innerHTML = `
        Найдите угол между плоскостями, если заданы их векторы нормали:
        $$\\vec{n}_1 = \\{${n1[0]};\\, ${n1[1]};\\, ${n1[2]}\\},\\quad
          \\vec{n}_2 = \\{${n2[0]};\\, ${n2[1]};\\, ${n2[2]}\\}$$
    `;
    document.getElementById('img7').src =
        'https://placehold.co/700x320/667eea/ffffff?text=Угол+между+плоскостями&font=roboto';
    updateMath();
}

window.addEventListener('load', () => {
    generateTask1();
    generateTask2();
    generateTask3();
    generateTask4();
    generateTask5();
    generateTask6();
    generateTask7();
});