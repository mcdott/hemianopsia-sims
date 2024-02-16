import React, { useEffect } from "react";
import p5, { Color, Vector } from "p5";

interface ColorButton {
  name: string;
  x: number;
  y: number;
}

const DrawingCanvas: React.FC = () => {
  useEffect(() => {
    let isMouseWithinCanvas: boolean = false;
    let isMouseDown: boolean = false;
    let prevMousePosition: Vector = new p5.Vector(0, 0);
    let strokeColor: p5.Color;
    let backgroundColor: number = 254;
    let lines: number[][] = [];

    const colors: ColorButton[] = [
      { name: "black", x: 50, y: 50 },
      { name: "red", x: 50, y: 100 },
      { name: "blue", x: 50, y: 150 },
      { name: "green", x: 50, y: 200 },
      { name: "yellow", x: 50, y: 250 },
      { name: "orange", x: 50, y: 300 },
      { name: "purple", x: 50, y: 350 },
    ];

    let p5Instance: p5;

    const sketch = (p: p5) => {
      p.setup = () => {
        p5Instance = p;
        const canvas = p.createCanvas(1400, 800);
        canvas.parent("drawingCanvas");
        strokeColor = p.color(0);
      };

      p.draw = () => {
        p.cursor(p.CROSS);
        p.background(backgroundColor);

        // Check if cursor is within canvas
        if (
          p.mouseX >= 0 &&
          p.mouseX <= p.width &&
          p.mouseY >= 0 &&
          p.mouseY <= p.height
        ) {
          isMouseWithinCanvas = true;
        } else {
          isMouseWithinCanvas = false;
        }

        // Draw color buttons
        for (let i = 0; i < colors.length; i++) {
          const c: p5.Color = p.color(colors[i].name) as p5.Color;
          p.fill(c);
          p.noStroke();
          p.ellipse(colors[i].x, colors[i].y, 30, 30); // increase button size to 30
          if (p.dist(p.mouseX, p.mouseY, colors[i].x, colors[i].y) < 15) {
            // increase button hit area to 15
            strokeColor = c;
          }
        }

        // Draw all the lines that have been drawn so far
        for (let i = 0; i < lines.length; i++) {
          p.stroke(lines[i][4]);
          p.strokeWeight(3);
          p.line(lines[i][0], lines[i][1], lines[i][2], lines[i][3]);
        }

        // Check if mouse/touch is down
        if (isMouseDown) {
          // Set stroke color and weight for the line
          p.stroke(strokeColor);
          p.strokeWeight(2);
          // Draw the line from the previous mouse position to the current mouse position
          p.line(prevMousePosition.x, prevMousePosition.y, p.mouseX, p.mouseY);
          // Add the line to the array of lines
          lines.push([
            prevMousePosition.x,
            prevMousePosition.y,
            p.mouseX,
            p.mouseY,
            p.red(strokeColor),
          ]);
        }

        // Update the previous mouse position to the current mouse position
        prevMousePosition.set(p.mouseX, p.mouseY);
      };

      p.mousePressed = () => {
        if (isMouseWithinCanvas && p.mouseButton === p.LEFT) {
          isMouseDown = true;
        }
      };

      p.mouseReleased = () => {
        if (p.mouseButton === p.LEFT) {
          isMouseDown = false;
        }
      };

      p.touchStarted = () => {
        // Handle touch events
        if (isMouseWithinCanvas) {
          isMouseDown = true;
          prevMousePosition.set(p.mouseX, p.mouseY);
        }

        // Prevent default behavior to avoid scrolling
        return false;
      };

      p.touchMoved = () => {
        // Handle touch events
        if (isMouseDown) {
          // Set stroke color and weight for the line
          p.stroke(strokeColor);
          p.strokeWeight(2);
          // Draw the line from the previous touch position to the current touch position
          p.line(prevMousePosition.x, prevMousePosition.y, p.mouseX, p.mouseY);
          // Add the line to the array of lines
          lines.push([
            prevMousePosition.x,
            prevMousePosition.y,
            p.mouseX,
            p.mouseY,
            p.red(strokeColor),
          ]);
          // Update the previous touch position to the current touch position
          prevMousePosition.set(p.mouseX, p.mouseY);
        }

        // Prevent default behavior to avoid scrolling
        return false;
      };

      p.touchEnded = () => {
        // Handle touch events
        isMouseDown = false;

        // Prevent default behavior to avoid scrolling
        return false;
      };
    };

    new p5(sketch);

    // Cleanup logic
    return () => {
      p5Instance.remove(); // This removes the p5 instance when the component unmounts
    };
  }, []); // Empty dependency array ensures useEffect runs once on mount

  return <div id='drawingCanvas'></div>;
};

export default DrawingCanvas;
// import React, { useEffect } from "react";
// import p5, { Color, Vector } from "p5";

// interface ColorButton {
//   name: string;
//   x: number;
//   y: number;
// }

// const DrawingCanvas: React.FC = () => {
//   useEffect(() => {
//     let rectX: number = 0;
//     let rectY: number = 0;
//     let isMouseWithinCanvas: boolean = false;
//     let isMouseDown: boolean = false;
//     let prevMousePosition: Vector = new p5.Vector(0, 0);
//     let strokeColor: p5.Color;
//     let backgroundColor: number = 220;
//     let rectangleColor: number = backgroundColor + 1;
//     let lines: number[][] = [];

//     const colors: ColorButton[] = [
//       { name: "black", x: 50, y: 50 },
//       { name: "red", x: 50, y: 100 },
//       { name: "blue", x: 50, y: 150 },
//       { name: "green", x: 50, y: 200 },
//       { name: "yellow", x: 50, y: 250 },
//       { name: "orange", x: 50, y: 300 },
//       { name: "purple", x: 50, y: 350 },
//     ];

//     let p5Instance: p5;

//     const sketch = (p: p5) => {
//       p.setup = () => {
//         p5Instance = p;
//         const canvas = p.createCanvas(1400, 800);
//         canvas.parent("drawingCanvas");
//         strokeColor = p.color(0);
//       };

//       p.draw = () => {
//         p.cursor(p.CROSS);
//         p.background(backgroundColor);

//         // Check if cursor is within canvas
//         if (
//           p.mouseX >= 0 &&
//           p.mouseX <= p.width &&
//           p.mouseY >= 0 &&
//           p.mouseY <= p.height
//         ) {
//           isMouseWithinCanvas = true;
//         } else {
//           isMouseWithinCanvas = false;
//         }

//         // Draw color buttons
//         for (let i = 0; i < colors.length; i++) {
//           const c: p5.Color = p.color(colors[i].name) as p5.Color;
//           p.fill(c);
//           p.noStroke();
//           p.ellipse(colors[i].x, colors[i].y, 30, 30); // increase button size to 30
//           if (p.dist(p.mouseX, p.mouseY, colors[i].x, colors[i].y) < 15) {
//             // increase button hit area to 15
//             strokeColor = c;
//           }
//         }

//         // Draw all the lines that have been drawn so far
//         for (let i = 0; i < lines.length; i++) {
//           p.stroke(lines[i][4]);
//           p.strokeWeight(3);
//           p.line(lines[i][0], lines[i][1], lines[i][2], lines[i][3]);
//         }

//         // Update position of rectangle based on cursor position
//         rectX = p.mouseX - 5;
//         rectY = p.mouseY;

//         // Draw the left rectangle
//         p.fill(rectangleColor);
//         p.strokeWeight(0);
//         p.rect(rectX + 10, 0, p.width - (rectX + 10), p.height);

//         // Check if mouse/touch is down
//         if (isMouseDown) {
//           // Set stroke color and weight for the line
//           p.stroke(strokeColor);
//           p.strokeWeight(2);
//           // Draw the line from the previous mouse position to the current mouse position
//           p.line(prevMousePosition.x, prevMousePosition.y, p.mouseX, p.mouseY);
//           // Add the line to the array of lines
//           lines.push([
//             prevMousePosition.x,
//             prevMousePosition.y,
//             p.mouseX,
//             p.mouseY,
//             p.red(strokeColor),
//           ]);
//         }

//         // Update the previous mouse position to the current mouse position
//         prevMousePosition.set(p.mouseX, p.mouseY);
//       };

//       p.mousePressed = () => {
//         if (isMouseWithinCanvas && p.mouseButton === p.LEFT) {
//           isMouseDown = true;
//         }
//       };

//       p.mouseReleased = () => {
//         if (p.mouseButton === p.LEFT) {
//           isMouseDown = false;
//         }
//       };

//       p.touchStarted = () => {
//         // Handle touch events
//         if (isMouseWithinCanvas) {
//           isMouseDown = true;
//           prevMousePosition.set(p.mouseX, p.mouseY);
//         }

//         // Prevent default behavior to avoid scrolling
//         return false;
//       };

//       p.touchMoved = () => {
//         // Handle touch events
//         if (isMouseDown) {
//           // Set stroke color and weight for the line
//           p.stroke(strokeColor);
//           p.strokeWeight(2);
//           // Draw the line from the previous touch position to the current touch position
//           p.line(prevMousePosition.x, prevMousePosition.y, p.mouseX, p.mouseY);
//           // Add the line to the array of lines
//           lines.push([
//             prevMousePosition.x,
//             prevMousePosition.y,
//             p.mouseX,
//             p.mouseY,
//             p.red(strokeColor),
//           ]);
//           // Update the previous touch position to the current touch position
//           prevMousePosition.set(p.mouseX, p.mouseY);
//         }

//         // Prevent default behavior to avoid scrolling
//         return false;
//       };

//       p.touchEnded = () => {
//         // Handle touch events
//         isMouseDown = false;

//         // Prevent default behavior to avoid scrolling
//         return false;
//       };
//     };

//     new p5(sketch);

//     // Cleanup logic if necessary
//     return () => {
//       p5Instance.remove(); // This removes the p5 instance when the component unmounts
//     };
//   }, []); // Empty dependency array ensures useEffect runs once on mount

//   return <div id='drawingCanvas'></div>;
// };

// export default DrawingCanvas;
