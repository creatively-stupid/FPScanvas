var FpsCanvas = (() => {
    var A = document,
    B = window,
    C = "createElement",
    D = "body",
    E = "setAttribute",
    F = "mageSmoothinEnabled",
    J = "fill",
    G = J+"Style",
    H = J+"Rect",
    I = J+"Text",
    K = "toString",
    L = "lineTo",
    M = "repeat",
    N = "appendChild",
    O = Math,
    P = O.max,
    Q = "addEventListener",
    R = MouseEvent,
    a = A[C]("canvas"),
    b = A[C]("a"),
    c = A[C]("style"),
    d = a.getContext("2d"),
    e = 0,
    f = new Array(98),
    g = new R("");
    c.innerHTML = "#fpsCanvas--a{position:absolute;right:0;image-rendering:optimizeSpeed;image-rendering:-moz-crisp-edges;image-rendering:-webkit-optimize-contrast;image-rendering:-o-crisp-edges;image-rendering:pixelated;-ms-interpolation-mode:nearest-neighbor;}#fpsCanvas--s{position:absolute;right:0;width:128px;height:64px;}";
    A[D][N](c);
    a[E]("id", "fpsCanvas--a");
    a[E]("width", "128");
    a[E]("height", "64");
    b[E]("id", "fpsCanvas--b");
    b[E]("href", "https://github.com/creatively-stupid/FPScanvas
    b[E]("target", "_blank");
    b[N](a);
    A[D].insertBefore(b, A[D].firstChild);
    d["i"+F] =
    d["mozI"+F] =
    d["webkitI"+F] = !1;
    for (var i = 0; i < f.length; i++) f[i] = 0;
    B[Q]("mousemove", (e) => {
        g = e
    });
    B[Q]("mouseout", (e) => {
        g = new R("")
    });
    j = (p, m) => {
        m = P(m, 1);
        return (1 - p / m) * 48 + 3
    },
    k = (l) => {
        var m = 1000 / (l - e),
            n = O.round(m),
            o = n[K]();
        e = l;
        o = "0"[M](4 - o.length) + o;
        d[G] = "#fff";
        d[H](0, 0, 128, 64);
        d.font = "12px \"Ubuntu Mono\"";
        d[G] = "#000";
        d[I](o + "fps", 86, 61);
        d[I]("CS FpsChart", 2, 61);
        d[H](2, 2, 100, 50);
        d[H](102, 3, 24, 1);
        d[H](102, 50, 24, 1);
        f.shift();
        f.push(n);
        var p = P(...f);
        d[I]("0"[M](4 - p[K]().length) + p[K](), 103, 12);
        d[I]("0fps", 103, 49);
        d[G] = "#f60";
        d.beginPath();
        d.moveTo(3, j(f[0], p));
        for (var i = 1; i < f.length; i++) {
            d[L](i + 3, j(f[i], p))
        }
        d[L](f.length+2,51);
        d[L](3,51);
        d[J]();
        var r = a.getBoundingClientRect(),
            X = a.width / r.width,
            Y = a.height / r.height,
            q = {
            x: (g.clientX - r.left) * X,
            y: (g.clientY - r.top) * Y
        };
        if (q.x >= 3 && q.y >= 0 && q.x <= 100 && q.y <= 63) {
            d[G] = "#ff0";
            d[H](q.x, 3, 1, 48);
            var r = f[q.x - 3][K]();
            r = "0"[M](4 - r.length) + r;
            if (q.x <= 75) {
                d[I](r, q.x + 2, 51)
            } else {
                d[I](r, q.x - 25, 51)
            }
        }
    };
    return k
})();
