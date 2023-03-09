import { useEffect } from "react";
import { useRef } from "react";

const Cursor = () => {
  const delay = 5,
    dot = useRef(null),
    dotOutline = useRef(null),
    cursorVisible = useRef(true),
    cursorEnlarged = useRef(false),
    endX = useRef(window.innerWidth / 2),
    endY = useRef(window.innerHeight / 2),
    _x = useRef(0),
    _y = useRef(0),
    requestRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", mouseOverEvent);
    document.addEventListener("mouseup", mouseOutEvent);
    document.addEventListener("mousemove", mouseMoveEvent);
    document.addEventListener("mousemove", mouseEnterEvent);
    document.addEventListener("mousemove", mouseLeaveEvent);
    animatedDotOutline();

    return () => {
      document.removeEventListener("mousedown", mouseOverEvent);
      document.removeEventListener("mouseup", mouseOutEvent);
      document.removeEventListener("mousemove", mouseMoveEvent);
      document.removeEventListener("mousemove", mouseEnterEvent);
      document.removeEventListener("mousemove", mouseLeaveEvent);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const toggleCursorVisibilty = () => {
      if (cursorVisible.current) {
        dot.current.style.opacity = 1;
        dotOutline.current.style.opacity = 1;
      } else {
        dot.current.style.opacity = 0;
        dotOutline.current.style.opacity = 0;
      }
    },
    toggleCursorSize = () => {
      if (cursorEnlarged.current) {
        dot.current.transform = "translate(-50% - 50%) scale(0.75)";
        dotOutline.current.transform = "translate(-50% - 50%) scale(1.5)";
      } else {
        dot.current.transform = "translate(-50% - 50%) scale(0.75)";
        dotOutline.current.transform = "translate(-50% - 50%) scale(1.5)";
      }
    },
    mouseOverEvent = () => {
      cursorEnlarged.current = true;
      toggleCursorSize();
    },
    mouseOutEvent = () => {
      cursorEnlarged.current = false;
      toggleCursorSize();
    },
    mouseEnterEvent = () => {
      cursorEnlarged.current = true;
      toggleCursorVisibilty();
    },
    mouseLeaveEvent = () => {
      cursorEnlarged.current = false;
      toggleCursorVisibilty();
    },
    mouseMoveEvent = (e) => {
      cursorVisible.current = true;
      toggleCursorVisibilty();

      endX.current = e.pageX ;
      endY.current = e.pageY ;

      dot.current.style.top = endY.current + "px";
      dot.current.style.left = endX.current + "px";
    },
    animatedDotOutline = () => {
      _x.current += (endX.current - _x.current) / delay;
      _y.current += (endY.current - _y.current) / delay;

      dotOutline.current.style.top = _y.current + "px";
      dotOutline.current.style.left = _x.current + "px";

      requestRef.current = requestAnimationFrame(animatedDotOutline);
    };

  return (
    <>
      <div
        className=" w-16 h-16 z-50 border border-headingColor  pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[50%] opacity-1 transition-opacity duration-300 ease-in-out hidden lg:block "
        ref={dotOutline}
      ></div>
      <div
        className=" w-4 h-4 z-50 bg-primary pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[50%] opacity-1 transition-opacity duration-300 ease-in-out hidden lg:block "
        ref={dot}
      ></div>
    </>
  );
};

export default Cursor;
