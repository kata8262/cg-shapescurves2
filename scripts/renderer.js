class Renderer {
    // canvas:              object ({id: __, width: __, height: __})
    // num_curve_sections:  int
    constructor(canvas, num_curve_sections, show_points_flag) {
        this.canvas = document.getElementById(canvas.id);
        this.canvas.width = canvas.width;
        this.canvas.height = canvas.height;
        this.ctx = this.canvas.getContext('2d', {willReadFrequently: true});
        this.slide_idx = 0;
        this.num_curve_sections = num_curve_sections;
        this.show_points = show_points_flag;

        // My custom constructors to not get confused
        this.red    = [255, 0, 0, 255];
        this.orange = [255, 165, 0, 255];
        this.yellow = [255, 255, 0, 255];
        this.green  = [0, 255, 0, 255];
        this.blue   = [0, 0, 255, 255];
        this.purple = [128, 0, 128, 255];
        this.black =  [0, 0, 0, 255];
        this.white =  [255,255,255,255];
    }

    // n:  int
    setNumCurveSections(n) {
        this.num_curve_sections = n;
        this.drawSlide(this.slide_idx);
    }

    // flag:  bool
    showPoints(flag) {
        this.show_points = flag;
        this.drawSlide(this.slide_idx);
    }
    
    // slide_idx:  int
    drawSlide(slide_idx) {
        this.slide_idx = slide_idx;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        let framebuffer = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);

        switch (this.slide_idx) {
            case 0:
                this.drawSlide0(framebuffer);
                break;
            case 1:
                this.drawSlide1(framebuffer);
                break;
            case 2:
                this.drawSlide2(framebuffer);
                break;
            case 3:
                this.drawSlide3(framebuffer);
                break;
        }

        this.ctx.putImageData(framebuffer, 0, 0);
    }

    // framebuffer:  canvas ctx image data
    drawSlide0(framebuffer) {
        
        // TODO: draw at least 2 Bezier curves
        //   - variable `this.num_curve_sections` should be used for `num_edges`
        let num_edges = this.num_curve_sections;
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
      
        let p0 = {x: 50, y: 600};
        let p1 = {x: 150, y: 500};
        let p2 = {x: 500, y: 300};
        let p3 = {x: 50, y: 50};
        this.drawBezierCurve(p0, p1, p2, p3, num_edges, [255,0,0,255], framebuffer);

        p0 = {x: 550, y: 600};
        p1 = {x: 150, y: 150};
        p2 = {x: 600, y: 500};
        p3 = {x: 550, y: 50};    
        this.drawBezierCurve(p0, p1, p2, p3, num_edges, this.blue, framebuffer);  

        p0 = {x: 100, y: 100};
        p1 = {x: 700, y: 50};
        p2 = {x: 50, y: 650};
        p3 = {x: 700, y: 600};
        this.drawBezierCurve(p0, p1, p2, p3, num_edges, this.orange, framebuffer);

        p0 = {x: 50, y: 350};
        p1 = {x: 400, y: -200};
        p2 = {x: 400, y: 900};
        p3 = {x: 750, y: 350};
        this.drawBezierCurve(p0, p1, p2, p3, num_edges, this.yellow, framebuffer);

        p0 = {x: 400, y: 50};
        p1 = {x: 50, y: 250};
        p2 = {x: 750, y: 450};
        p3 = {x: 400, y: 650};
        this.drawBezierCurve(p0, p1, p2, p3, num_edges, this.green, framebuffer);

        p0 = {x: 100, y: 650};
        p1 = {x: 100, y: 50};
        p2 = {x: 700, y: 50};
        p3 = {x: 700, y: 650};
        this.drawBezierCurve(p0, p1, p2, p3, num_edges, this.blue, framebuffer);

        p0 = {x: 700, y: 100};
        p1 = {x: 50, y: 100};
        p2 = {x: 750, y: 600};
        p3 = {x: 100, y: 600};
        this.drawBezierCurve(p0, p1, p2, p3, num_edges, this.purple, framebuffer);

        p0 = {x: 200, y: 100};
        p1 = {x: 700, y: 700};
        p2 = {x: 50, y: 700};
        p3 = {x: 600, y: 100};
        this.drawBezierCurve(p0, p1, p2, p3, num_edges, this.red, framebuffer);

        p0 = {x: 400, y: 350};
        p1 = {x: -100, y: -100};
        p2 = {x: 900, y: -100};
        p3 = {x: 400, y: 350};
        this.drawBezierCurve(p0, p1, p2, p3, num_edges, this.orange, framebuffer);

        p0 = {x: 400, y: 350};
        p1 = {x: 900, y: 800};
        p2 = {x: -100, y: 800};
        p3 = {x: 400, y: 350};
        this.drawBezierCurve(p0, p1, p2, p3, num_edges, this.green, framebuffer);

        p0 = {x: 50, y: 50};
        p1 = {x: 750, y: 200};
        p2 = {x: 50, y: 500};
        p3 = {x: 750, y: 650};
        this.drawBezierCurve(p0, p1, p2, p3, num_edges, this.purple, framebuffer);

        p0 = {x: 750, y: 50};
        p1 = {x: 200, y: 700};
        p2 = {x: 600, y: -100};
        p3 = {x: 50, y: 650};
        this.drawBezierCurve(p0, p1, p2, p3, num_edges, this.black, framebuffer);
                
    }

    // framebuffer:  canvas ctx image data
    drawSlide1(framebuffer) {
        // TODO: draw at least 2 circles
        //   - variable `this.num_curve_sections` should be used for `num_edges`
        let num_edges = this.num_curve_sections;
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
        // draw vertices is gonna be located in drawCircle as it needs t odraw at each edge,
        // instead of like the origin only.

        let center = {x: 200, y: 200};
        let radius = 50;
        this.drawCircle(center, radius, num_edges, this.orange, framebuffer);

        center = {x: 300, y: 300};
        radius = 25;
        this.drawCircle(center, radius, num_edges, this.green, framebuffer);

        center = {x: 100, y: 100};
        radius = 35;
        this.drawCircle(center, radius, num_edges, this.red, framebuffer);

        center = {x: 500, y: 120};
        radius = 80;
        this.drawCircle(center, radius, num_edges, this.blue, framebuffer);

        center = {x: 650, y: 200};
        radius = 45;
        this.drawCircle(center, radius, num_edges, this.purple, framebuffer);

        center = {x: 100, y: 500};
        radius = 90;
        this.drawCircle(center, radius, num_edges, this.yellow, framebuffer);

        center = {x: 400, y: 400};
        radius = 120;
        this.drawCircle(center, radius, num_edges, this.orange, framebuffer);

        center = {x: 650, y: 550};
        radius = 60;
        this.drawCircle(center, radius, num_edges, this.green, framebuffer);

        center = {x: 300, y: 100};
        radius = 20;
        this.drawCircle(center, radius, num_edges, this.black, framebuffer);

        center = {x: 550, y: 350};
        radius = 30;
        this.drawCircle(center, radius, num_edges, this.red, framebuffer);

        center = {x: 250, y: 500};
        radius = 55;
        this.drawCircle(center, radius, num_edges, this.blue, framebuffer);

        center = {x: 720, y: 350};
        radius = 100;
        this.drawCircle(center, radius, num_edges, this.purple, framebuffer);

        center = {x: 400, y: 180};
        radius = 65;
        this.drawCircle(center, radius, num_edges, this.yellow, framebuffer);

        center = {x: 500, y: 580};
        radius = 40;
        this.drawCircle(center, radius, num_edges, this.orange, framebuffer);

        center = {x: 180, y: 350};
        radius = 70;
        this.drawCircle(center, radius, num_edges, this.green, framebuffer);
        
        // slide 2 sheneiga ns
        
    }

    // framebuffer:  canvas ctx image data
    drawSlide2(framebuffer) {
        // TODO: draw at least 2 convex polygons (each with a different number of vertices >= 5)
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
        
        
        // Following lines are example of drawing a single triangle
        // (this should be removed after you implement the polygon)

        let poly1 = [
            {x: 30,  y: 120},
            {x: 220, y: 40},
            {x: 520, y: 35},
            {x: 760, y: 90},
            {x: 690, y: 180},
            {x: 300, y: 210},
            {x: 80,  y: 170}
        ];

        let poly2 = [
            {x: 90,  y: 260},
            {x: 180, y: 220},
            {x: 290, y: 230},
            {x: 330, y: 360},
            {x: 270, y: 560},
            {x: 150, y: 590},
            {x: 70,  y: 430}
        ];

        let poly3 = [
            {x: 360, y: 90},
            {x: 520, y: 50},
            {x: 740, y: 70},
            {x: 780, y: 160},
            {x: 700, y: 250},
            {x: 500, y: 280},
            {x: 370, y: 210}
        ];

        let poly4 = [
            {x: 20,  y: 340},
            {x: 180, y: 280},
            {x: 420, y: 260},
            {x: 600, y: 310},
            {x: 560, y: 420},
            {x: 310, y: 470},
            {x: 80,  y: 430}
        ];

        let poly5 = [
            {x: 500, y: 300},
            {x: 620, y: 250},
            {x: 760, y: 280},
            {x: 790, y: 420},
            {x: 690, y: 590},
            {x: 560, y: 560},
            {x: 480, y: 430}
        ];

        let poly6 = [
            {x: 40,  y: 30},
            {x: 130, y: 20},
            {x: 260, y: 60},
            {x: 250, y: 130},
            {x: 180, y: 170},
            {x: 70,  y: 150},
            {x: 20,  y: 90}
        ];

        let poly7 = [
            {x: 250, y: 360},
            {x: 420, y: 310},
            {x: 700, y: 320},
            {x: 750, y: 390},
            {x: 670, y: 470},
            {x: 430, y: 500},
            {x: 280, y: 450}
        ];

        let poly8 = [
            {x: 300, y: 10},
            {x: 500, y: 0},
            {x: 720, y: 40},
            {x: 740, y: 110},
            {x: 610, y: 150},
            {x: 380, y: 140},
            {x: 280, y: 80}
        ];

        let poly9 = [
            {x: 10,  y: 500},
            {x: 160, y: 430},
            {x: 390, y: 410},
            {x: 520, y: 450},
            {x: 500, y: 560},
            {x: 320, y: 610},
            {x: 80,  y: 590}
        ];

        let poly10 = [
            {x: 180, y: 140},
            {x: 340, y: 80},
            {x: 590, y: 100},
            {x: 700, y: 180},
            {x: 660, y: 300},
            {x: 430, y: 340},
            {x: 230, y: 280},
            {x: 150, y: 210}
        ];

        this.drawConvexPolygon(poly1, this.red, framebuffer);
        this.drawConvexPolygon(poly2, this.orange, framebuffer);
        this.drawConvexPolygon(poly3, this.yellow, framebuffer);
        this.drawConvexPolygon(poly4, this.green, framebuffer);
        this.drawConvexPolygon(poly5, this.blue, framebuffer);
        this.drawConvexPolygon(poly6, this.purple, framebuffer);
        this.drawConvexPolygon(poly7, this.black, framebuffer);
        this.drawConvexPolygon(poly8, this.red, framebuffer);
        this.drawConvexPolygon(poly9, this.green, framebuffer);
        this.drawConvexPolygon(poly10, this.blue, framebuffer);
    }

    // framebuffer:  canvas ctx image data
    drawSlide3(framebuffer) {
        // TODO: draw your name!
        //   - variable `this.num_curve_sections` should be used for `num_edges`
        let num_edges = this.num_curve_sections;
        //   - variable `this.show_points` should be used to determine whether or not to render vertices

        // S
        let p0 = {x: 120, y: 300};
        let p1 = {x: 20, y:360};
        let p2 = {x: 20,  y: 220};
        let p3 = {x: 100, y: 220};
        this.drawBezierCurve(p0, p1, p2, p3, num_edges, this.red, framebuffer);

        p0 = {x: 100, y: 220};
        p1 = {x: 190, y: 220};
        p2 = {x: 180, y: 100};
        p3 = {x: 80,  y: 140};
        this.drawBezierCurve(p0, p1, p2, p3, num_edges, this.red, framebuffer);

        // T
        p0 = {x: 180, y: 300};
        p1 = {x: 300, y: 300};
        this.drawLine(p0, p1, this.orange,framebuffer);
        if (this.show_points) {
            this.drawVertex(p0, this.orange, framebuffer);
            this.drawVertex(p1, this.orange, framebuffer);
        }

        p0 = {x: 240, y: 300};
        p1 = {x: 240, y: 140};        
        this.drawLine(p0, p1, this.orange, framebuffer);
        if (this.show_points) {
            this.drawVertex(p0, this.orange, framebuffer);
            this.drawVertex(p1, this.orange, framebuffer);
        }        

        // A
        let a_shape = [
            {x: 320, y: 140},
            {x: 370, y: 300},
            {x: 420, y: 140},
            {x: 395, y: 140},
            {x: 370, y: 225},
            {x: 345, y: 140}
        ];

        let a_bottom = [
            {x: 345, y: 140},
            {x: 395, y: 140},
            {x: 385, y: 180},
            {x: 355, y: 180},
        ]

        let a_top = [
            {x: 360, y: 210},
            {x: 380, y: 210},
            {x: 370, y: 270}
        ]

        this.drawConvexPolygon(a_shape, this.green, framebuffer);
        this.drawConvexPolygon(a_bottom, this.white, framebuffer);
        this.drawConvexPolygon(a_top, this.white, framebuffer);

        // N
        p0 = {x: 470, y: 140};
        p1 = {x: 470, y: 300};
        this.drawLine(p0, p1, this.blue, framebuffer);
        if (this.show_points) {
            this.drawVertex(p0, this.blue, framebuffer);
            this.drawVertex(p1, this.blue, framebuffer);
        }

        p0 = {x: 470, y: 300};
        p1 = {x: 570, y: 140};
        this.drawLine(p0, p1, this.blue, framebuffer);
        if (this.show_points) {
            this.drawVertex(p0, this.blue, framebuffer);
            this.drawVertex(p1, this.blue, framebuffer);
        }

        p0 = {x: 570, y: 140};
        p1 = {x: 570, y: 300};
        this.drawLine(p0, p1, this.blue, framebuffer);
        if (this.show_points) {
            this.drawVertex(p0, this.blue, framebuffer);
            this.drawVertex(p1, this.blue, framebuffer);
        }   

        // Circle
        this.drawCircle(
            {x: 640, y: 220},
            35,
            num_edges,
            this.purple,
            framebuffer
        );

        // Octogon
        let octagon = [
        {x: 625, y: 85},
        {x: 655, y: 85},
        {x: 675, y: 105},
        {x: 675, y: 135},
        {x: 655, y: 155},
        {x: 625, y: 155},
        {x: 605, y: 135},
        {x: 605, y: 105}
    ];

    this.drawConvexPolygon(
        octagon,
        this.orange,
        framebuffer
    );

    }
    

    // p0:           object {x: __, y: __}
    // p1:           object {x: __, y: __}
    // p2:           object {x: __, y: __}
    // p3:           object {x: __, y: __}
    // num_edges:    int
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawBezierCurve(p0, p1, p2, p3, num_edges, color, framebuffer) {
        // TODO: draw a sequence of straight lines to approximate a Bezier curve

        if (this.show_points) {
            this.drawVertex(p0, color, framebuffer);
            this.drawVertex(p1, color, framebuffer);
            this.drawVertex(p2, color, framebuffer);
            this.drawVertex(p3, color, framebuffer);
        }

        let step = 1; 
        let t = step / num_edges; 
        let previous = {x: p0.x, y: p0.y};

        while (step <= num_edges) {

            if (this.show_points) {
            this.drawVertex(previous, color, framebuffer);
            }

            t = step / num_edges;

            let currentPoint = {x:Math.round(((1-t)**3) * p0.x + 3 * ((1-t)**2) * t * p1.x + 3 * (1-t) * (t**2) * p2.x + (t**3) * p3.x),
                                y:Math.round(((1-t)**3) * p0.y + 3 * ((1-t)**2) * t * p1.y + 3 * (1-t) * (t**2) * p2.y + (t**3) * p3.y )};

            this.drawLine(previous,currentPoint,color,framebuffer);
            previous = {x: currentPoint.x, y: currentPoint.y};
            step++;
        }

            if (this.show_points) {
            this.drawVertex(previous, color, framebuffer);
            }
    }


    // center:       object {x: __, y: __}
    // radius:       int
    // num_edges:    int
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawCircle(center, radius, num_edges, color, framebuffer) {
        // TODO: draw a sequence of straight lines to approximate a circle
        let step = 1;
        let previous = {x: center.x + radius, y: center.y}; 


        while (step <= num_edges) {
            let phi = (step / num_edges) * 2 * Math.PI;

            let currentPoint = { x: Math.round(center.x + (radius * Math.cos(phi))),
                                 y: Math.round(center.y + (radius * Math.sin(phi)))};

            this.drawLine(previous, currentPoint, color,framebuffer);

            if (this.show_points) {
                this.drawVertex(currentPoint, color, framebuffer);
            }            

            previous = {x: currentPoint.x, y: currentPoint.y};
            step++;
        }

        
        
        
    }
    
    // vertex_list:  array of object [{x: __, y: __}, {x: __, y: __}, ..., {x: __, y: __}]
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawConvexPolygon(vertex_list, color, framebuffer) {
        // TODO: draw a sequence of triangles to form a convex polygon
        for (let i = 1; i < vertex_list.length - 1; i++) {

            this.drawTriangle(vertex_list[0], vertex_list[i], vertex_list[i+1], color, framebuffer); 
        }

        if (this.show_points) {
            for (let i = 0; i < vertex_list.length; i++) {
                             this.drawVertex(vertex_list[i], this.black, framebuffer);
            }
        }        
        
    }
    
    // v:            object {x: __, y: __}
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawVertex(v, color, framebuffer) {
        // TODO: draw some symbol (e.g. small rectangle, two lines forming an X, ...) centered at position `v`
        let size = 5;
        this.drawLine(
            {x: v.x - size, y: v.y - size},
            {x: v.x + size, y: v.y + size},
            color,
            framebuffer
        );

        this.drawLine(
            {x: v.x - size, y: v.y + size},
            {x: v.x + size, y: v.y - size},
            color,
            framebuffer
        );
            
        
    }
    
    /***************************************************************
     ***       Basic Line and Triangle Drawing Routines          ***
     ***       (code provided from in-class activities)          ***
     ***************************************************************/
    pixelIndex(x, y, framebuffer) {
	    return 4 * y * framebuffer.width + 4 * x;
    }
    
    setFramebufferColor(color, x, y, framebuffer) {
	    let p_idx = this.pixelIndex(x, y, framebuffer);
        for (let i = 0; i < 4; i++) {
            framebuffer.data[p_idx + i] = color[i];
        }
    }
    
    swapPoints(a, b) {
        let tmp = {x: a.x, y: a.y};
        a.x = b.x;
        a.y = b.y;
        b.x = tmp.x;
        b.y = tmp.y;
    }

    drawLine(p0, p1, color, framebuffer) {


        if (Math.abs(p1.y - p0.y) <= Math.abs(p1.x - p0.x)) { // |m| <= 1
            if (p0.x < p1.x) {
                this.drawLineLow(p0.x, p0.y, p1.x, p1.y, color, framebuffer);
            }
            else {
                this.drawLineLow(p1.x, p1.y, p0.x, p0.y, color, framebuffer);
            }
        }
        else {                                                // |m| > 1
            if (p0.y < p1.y) {
                this.drawLineHigh(p0.x, p0.y, p1.x, p1.y, color, framebuffer);
            }
            else {
                this.drawLineHigh(p1.x, p1.y, p0.x, p0.y, color, framebuffer);
            }
        }
    }
    
    drawLineLow(x0, y0, x1, y1, color, framebuffer) {
        let A = y1 - y0;
        let B = x0 - x1;
        let iy = 1; // y increment (+1 for positive slope, -1 for negative slop)
        if (A < 0) {
            iy = -1;
            A *= -1;
        }
        let D = 2 * A + B;
        let D0 = 2 * A;
        let D1 = 2 * A + 2 * B;
    
        let y = y0;
        for (let x = x0; x <= x1; x++) {
            this.setFramebufferColor(color, x, y, framebuffer);
            if (D <= 0) {
                D += D0;
            }
            else {
                D += D1;
                y += iy;
            }
        }
    }
    
    drawLineHigh(x0, y0, x1, y1, color, framebuffer) {
        let A = x1 - x0;
        let B = y0 - y1;
        let ix = 1; // x increment (+1 for positive slope, -1 for negative slop)
        if (A < 0) {
            ix = -1;
            A *= -1;
        }
        let D = 2 * A + B;
        let D0 = 2 * A;
        let D1 = 2 * A + 2 * B;
    
        let x = x0;
        for (let y = y0; y <= y1; y++) {
            this.setFramebufferColor(color, x, y, framebuffer);
            if (D <= 0) {
                D += D0;
            }
            else {
                D += D1;
                x += ix;
            }
        }
    }
    
    drawTriangle(p0, p1, p2, color, framebuffer) {
        // Deep copy, then sort points in ascending y order
        p0 = {x: p0.x, y: p0.y};
        p1 = {x: p1.x, y: p1.y};
        p2 = {x: p2.x, y: p2.y};
        if (p1.y < p0.y) this.swapPoints(p0, p1);
        if (p2.y < p0.y) this.swapPoints(p0, p2);
        if (p2.y < p1.y) this.swapPoints(p1, p2);
        
        // Edge coherence triangle algorithm
        // Create initial edge table
        let edge_table = [
            {x: p0.x, inv_slope: (p1.x - p0.x) / (p1.y - p0.y)}, // edge01
            {x: p0.x, inv_slope: (p2.x - p0.x) / (p2.y - p0.y)}, // edge02
            {x: p1.x, inv_slope: (p2.x - p1.x) / (p2.y - p1.y)}  // edge12
        ];
        
        // Do cross product to determine if pt1 is to the right/left of edge02
        let v01 = {x: p1.x - p0.x, y: p1.y - p0.y};
        let v02 = {x: p2.x - p0.x, y: p2.y - p0.y};
        let p1_right = ((v01.x * v02.y) - (v01.y * v02.x)) >= 0;
        
        // Get the left and right edges from the edge table (lower half of triangle)
        let left_edge, right_edge;
        if (p1_right) {
            left_edge = edge_table[1];
            right_edge = edge_table[0];
        }
        else {
            left_edge = edge_table[0];
            right_edge = edge_table[1];
        }
        // Draw horizontal lines (lower half of triangle)
        for (let y = p0.y; y < p1.y; y++) {
            let left_x = parseInt(left_edge.x) + 1;
            let right_x = parseInt(right_edge.x);
            if (left_x <= right_x) { 
                this.drawLine({x: left_x, y: y}, {x: right_x, y: y}, color, framebuffer);
            }
            left_edge.x += left_edge.inv_slope;
            right_edge.x += right_edge.inv_slope;
        }
        
        // Get the left and right edges from the edge table (upper half of triangle) - note only one edge changes
        if (p1_right) {
            right_edge = edge_table[2];
        }
        else {
            left_edge = edge_table[2];
        }
        // Draw horizontal lines (upper half of triangle)
        for (let y = p1.y; y < p2.y; y++) {
            let left_x = parseInt(left_edge.x) + 1;
            let right_x = parseInt(right_edge.x);
            if (left_x <= right_x) {
                this.drawLine({x: left_x, y: y}, {x: right_x, y: y}, color, framebuffer);
            }
            left_edge.x += left_edge.inv_slope;
            right_edge.x += right_edge.inv_slope;
        }
    }

};

export { Renderer };
