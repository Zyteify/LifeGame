export type Attribute = {
  format: string;
  offset: number;
  shaderLocation: number;
};

export type ComputeBufferLayout = {
  arrayStride: number;
  attributes: Attribute[];
};

export function getCoordinates(index: number, gridSize: number): { x: number, y: number } {
  const y = Math.floor(index / gridSize);  // Calculate the row (x)
  const x = index % gridSize;  // Calculate the column (y)
  return { x, y };
}

const computeBufferLayout: ComputeBufferLayout = {
  arrayStride: 8,
  attributes: [
    {
      format: "float32",
      offset: 0,
      shaderLocation: 0,
    },
  ],
};

//make the element flash
export function flash(id: string) {
  var element: HTMLElement = <HTMLElement> document.getElementById(id);

  //check to see if it already has the flash class
  if (element.classList.contains("flash")) {
      //remove the flash class
      element.classList.remove("flash");
  }
  // Add the "flash" class to the element
  element.classList.add("flash");
  
  // Remove the "flash" class after the animation completes
  setTimeout(function() {
    element.classList.remove("flash");
  }, 2000); // Adjust the timeout value to match the animation duration
}

