// Type definitions for Raphael 2.1.2k
// Project: http://raphaeljs.com
// Fork: https://github.com/hrkksm10/raphael

interface RaphaelBBox {

    x: number;
    y: number;
    x2: number;
    y2: number;
    width: number;
    height: number;
}

interface RaphaelAnimation {

    delay(delay: number): RaphaelAnimation;
    repeat(repeat: number): RaphaelAnimation;
}

interface RaphaelFont {
}

interface RaphaelGenericElement<TElement> {

    animate(params: {}, ms: number, easing?: string, callback?: Function): TElement;
    animate(animation: RaphaelAnimation): TElement;
    animateWith(el: RaphaelElement, anim: RaphaelAnimation, params: any, ms: number, easing?: string, callback?: Function): TElement;
    animateWith(el: RaphaelElement, anim: RaphaelAnimation, animation: RaphaelAnimation): TElement;

    attr(attrName: string, value: any): TElement;
    attr(attrName: string): any;
    attr(attrNames: string[]): any[];
    attr(params: {}): TElement;

    clone(): RaphaelElement;

    data(key: string, value: any): TElement;
    data(key: string): any;
    data(values: {}): TElement;

    getBBox(isWithoutTransform?: boolean): RaphaelBBox;
    getData(): any;
    glow(glow?: { width?: number; fill?: boolean; opacity?: number; offsetx?: number; offsety?: number; color?: string; }): RaphaelSet;
    hide(): TElement;
    id: string;
    insertAfter(): TElement;
    insertBefore(): TElement;
    isPointInside(x: number, y: number): boolean;
    isVisible(): boolean;
    matrix: RaphaelMatrix;

    click(handler: Function, context?: any): TElement;
    dblclick(handler: Function, context?: any): TElement;
    drag(onmove: (dx: number, dy: number, x: number, y: number, event: DragEvent) => void, onstart: (x: number, y: number, event: DragEvent) => void, onend: (DragEvent: any) => void, mcontext?: any, scontext?: any, econtext?: any): TElement;
    hover(f_in: Function, f_out: Function, icontext?: any, ocontext?: any): RaphaelElement;
    mousedown(handler: Function, context?: any): TElement;
    mousemove(handler: Function, context?: any): TElement;
    mouseout(handler: Function, context?: any): TElement;
    mouseover(handler: Function, context?: any): TElement;
    mouseup(handler: Function, context?: any): TElement;

    next: TElement;
    node: any; // SVGElement;
    onDragOver(f: Function): TElement;
    paper: RaphaelPaper;
    pause(anim?: RaphaelAnimation): TElement;
    prev: TElement;
    raphael: RaphaelStatic;

    remove(): any;
    removeData(key?: string): TElement;

    resume(anim?: RaphaelAnimation): TElement;

    setTime(anim: RaphaelAnimation): void;
    setTime(anim: RaphaelAnimation, value: number): TElement;

    show(): RaphaelElement;

    status(): { anim: RaphaelAnimation; status: number; }[];
    status(anim: RaphaelAnimation): number;
    status(anim: RaphaelAnimation, value: number): TElement;

    stop(anim?: RaphaelAnimation): TElement;

    toBack(): TElement;
    toFront(): TElement;

    touchcancel(handler: Function): TElement;
    touchend(handler: Function): TElement;
    touchmove(handler: Function): TElement;
    touchstart(handler: Function): TElement;

    transform(): string;
    transform(tstr: string): TElement;
    translate(dx:number, dy:number): TElement;

    unclick(handler?: Function): TElement;
    undblclick(handler?: Function): TElement;
    undrag(): TElement;
    unhover(): TElement;
    unhover(f_in: Function, f_out: Function): TElement;
    unmousedown(handler?: Function): TElement;
    unmousemove(handler?: Function): TElement;
    unmouseout(handler?: Function): TElement;
    unmouseover(handler?: Function): TElement;
    unmouseup(handler?: Function): TElement;
    untouchcancel(handler?: Function ): TElement;
    untouchend(handler?: Function): TElement;
    untouchmove(handler?: Function): TElement;
    untouchstart(handler?: Function): TElement;

    // path element only method
    getPath(): any;
    getPointAtLength(length: number): { x: number; y: number; alpha: number; };
    getSubpath(from: number, to: number): string;
    getTotalLength(): number;
}

interface RaphaelElement extends RaphaelGenericElement<RaphaelElement> {}

interface RaphaelSet extends RaphaelGenericElement<RaphaelSet> {

    clear(): void;
    exclude(element: RaphaelElement): boolean;
    forEach(callback: Function, thisArg?: any): RaphaelSet;
    pop(): RaphaelElement;
    push(...RaphaelElement: any[]): RaphaelElement;
    splice(index: number, count: number): RaphaelSet;
    splice(index: number, count: number, ...insertion: RaphaelElement[]): RaphaelSet;
    length: number;

    [key: number]: RaphaelElement;
}

interface RaphaelMatrix {

    add(a: number, b: number, c: number, d: number, e: number, f: number, matrix: RaphaelMatrix): RaphaelMatrix;
    clone(): RaphaelMatrix;
    invert(): RaphaelMatrix;
    rotate(a: number, x: number, y: number): void;
    scale(x: number, y?: number, cx?: number, cy?: number): void;
    split(): { dx: number; dy: number; scalex: number; scaley: number; shear: number; rotate: number; isSimple: boolean; };
    toTransformString(): string;
    translate(x: number, y: number): void;
    x(x: number, y: number): number;
    y(x: number, y: number): number;
}

interface RaphaelPaper {

    add(JSON: any): RaphaelSet;
    bottom: RaphaelElement;
    canvas: SVGSVGElement;
    circle(x: number, y: number, r: number): RaphaelElement;
    clear(): void;
    defs: SVGDefsElement;
    ellipse(x: number, y: number, rx: number, ry: number): RaphaelElement;
    forEach(callback: number, thisArg: any): RaphaelStatic;
    getById(id: number): RaphaelElement;
    getElementByPoint(x: number, y: number): RaphaelElement;
    getElementsByPoint(x: number, y: number): RaphaelSet;
    getFont(family: string, weight?: string, style?: string, stretch?: string): RaphaelFont;
    getFont(family: string, weight?: number, style?: string, stretch?: string): RaphaelFont;
    height: number;
    image(src: string, x: number, y: number, width: number, height: number): RaphaelElement;
    path(pathString?: string): RaphaelElement; // path element
    print(x: number, y: number, str: string, font: RaphaelFont, size?: number, origin?: string, letter_spacing?: number): RaphaelElement; // path element
    rect(x?: number, y?: number, width?: number, height?: number, r?: number): RaphaelElement;
    remove(): any;
    renderfix(): void;
    safari(): void;
    set(elements?: RaphaelElement[]): RaphaelSet;
    setFinish(): void;
    setSize(width: number, height: number): void;
    setStart(): void;
    getViewBox(): any[];
    setViewBox(x: number, y: number, w: number, h: number, fit: boolean): void;
    text(x: number, y: number, text: string): RaphaelElement;
    top: RaphaelElement;
    width: number;
}

interface RaphaelStatic {

    (container: HTMLElement, width: number, height: number, callback?: Function): RaphaelPaper;
    (container: string, width: number, height: number, callback?: Function): RaphaelPaper;
    (x: number, y: number, width: number, height: number, callback?: Function): RaphaelPaper;
    (all: any[], callback?: Function): RaphaelPaper;
    (onReadyCallback?: Function): RaphaelPaper;

    angle(x1: number, y1: number, x2: number, y2: number, x3?: number, y3?: number): number;
    animation(params: any, ms: number, easing?: string, callback?: Function): RaphaelAnimation;
    bezierBBox(p1x: number, p1y: number, c1x: number, c1y: number, c2x: number, c2y: number, p2x: number, p2y: number): { min: { x: number; y: number; }; max: { x: number; y: number; }; };
    bezierBBox(bez: any[]): { min: { x: number; y: number; }; max: { x: number; y: number; }; };
    color(clr: string): { r: number; g: number; b: number; hex: string; error: boolean; h: number; s: number; v: number; l: number; };
    createUUID(): string;
    deg(deg: number): number;
    easing_formulas: any;
    el: any;
    findDotsAtSegment(p1x: number, p1y: number, c1x: number, c1y: number, c2x: number, c2y: number, p2x: number, p2y: number, t: number): { x: number; y: number; m: { x: number; y: number; }; n: { x: number; y: number; }; start: { x: number; y: number; }; end: { x: number; y: number; }; alpha: number; };
    fn: any;
    format(token: string, ...parameters: any[]): string;
    fullfill(token: string, json: JSON): string;
    getColor:{
        (value?: number): string;
        reset(): void;
    };
    getPointAtLength(path: string, length: number): { x: number; y: number; alpha: number; };
    getRGB(colour: string): { r: number; g: number; b: number; hex: string; error: boolean; };
    getSubpath(path: string, from: number, to: number): string;
    getTotalLength(path: string): number;
    hsb(h: number, s: number, b: number): string;
    hsb2rgb(h: number, s: number, v: number): { r: number; g: number; b: number; hex: string; };
    hsl(h: number, s: number, l: number): string;
    hsl2rgb(h: number, s: number, l: number): { r: number; g: number; b: number; hex: string; };
    is(o: any, type: string): boolean;
    isBBoxIntersect(bbox1: string, bbox2: string): boolean;
    isPointInsideBBox(bbox: string, x: number, y: number): boolean;
    isPointInsidePath(path: string, x: number, y: number): boolean;
    matrix(a: number, b: number, c: number, d: number, e: number, f: number): RaphaelMatrix;

    parsePathString(pathString: string): string[];
    parsePathString(pathString: string[]): string[];
    parseTransformString(TString: string): string[];
    parseTransformString(TString: string[]): string[];
    path2curve(pathString: string): string[];
    path2curve(pathString: string[]): string[];
    pathBBox(path: string): RaphaelBBox;
    pathIntersection(path1: string, path2: string): { x: number; y: number; t1: number; t2: number; segment1: number; segment2: number; bez1: any[]; bez2: any[]; }[];
    pathToRelative(pathString: string): string[];
    pathToRelative(pathString: string[]): string[];
    rad(deg: number): number;
    registerFont(font: RaphaelFont): RaphaelFont;
    rgb(r: number, g: number, b: number): string;
    rgb2hsb(r: number, g: number, b: number): { h: number; s: number; b: number; };
    rgb2hsl(r: number, g: number, b: number): { h: number; s: number; l: number; };
    setWindow(newwin: Window): void;
    snapTo(values: number, value: number, tolerance?: number): number;
    snapTo(values: number[], value: number, tolerance?: number): number;
    st: any;
    svg: boolean;
    toMatrix(path: string, transform: string): RaphaelMatrix;
    toMatrix(path: string, transform: string[]): RaphaelMatrix;
    transformPath(path: string, transform: string): string;
    transformPath(path: string, transform: string[]): string;
    type: string;
    vml: boolean;
}

declare var Raphael: RaphaelStatic;
