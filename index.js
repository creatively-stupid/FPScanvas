function frame(frametime) {

    FpsCanvas(frametime);
    
    requestAnimationFrame(frame);
}
requestAnimationFrame(frame);