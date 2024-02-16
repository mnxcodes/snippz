"use client";
import CodeMirror, { EditorView } from "@uiw/react-codemirror";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Resizable } from "re-resizable";
import { getExt, gradients, loadLanguage, themes } from "@/config";
const fontSize = EditorView.baseTheme({
  "&": {
    position: "relative",
    fontSize: "16px",
    padding: "18px",
    borderTop: "none",
    width: "100% !important",
    boxShadow: "2px 3px 10px rgba(0,0,0,0.2)",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    border: "none !important",
    overflow: "auto",
    outline: "none !important",
    transition: "border 0.3s ease",
  },
  "&:hover": {
    border: "none",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    inset: "0",
    backdropFilter: "blur(10px)",
    borderRadius: "20px",
  },
});

type EditorProps = {
  language: string;
  theme: string;
  gradient: string;
  title: string;
  padding: number;
  setTitle: (title: string) => void;
  setCode: (code: string) => void;
  code: string;
};
function CodeEditor({
  theme,
  setTitle,
  title,
  language,
  padding,
  code,
  setCode,
  gradient,
}: EditorProps) {
  const [width, setWidth] = useState(1000);
  const [height, setHeight] = useState<number | null>(500);
  const currGradient = useMemo(
    () => gradients[gradient!] || gradient,
    [gradient]
  );

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value.split(".")[0];
    setTitle(newTitle);
  };
  // @ts-ignore
  const handleResize = (evt, direction, ref, pos) => {
    const newHeight = ref.style.height;
    setHeight(parseInt(newHeight, 10));
  };

  const updateSize = () => {
    setWidth(window.innerWidth);
  };
  const onChange = useCallback(
    (val: string, _: any) => {
      setCode(val);
    },
    [setCode]
  );
  useEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return (
    <div>
      <Resizable
        minWidth={510}
        maxWidth={1000}
        onResize={handleResize}
        defaultSize={{
          width,
          height: height! || 500,
        }}
        style={{ padding, background: currGradient }}
        className={`
          
         resize-container relative flex flex-col items-center justify-center
          `}
      >
        <div className="code-block  w-full">
          <div
            className="handle handle-top absolute left-1/2 translate-x-[-50%] top-[-4px] w-2 h-2 
            rounded-full bg-slate-300 hover:bg-slate-50"
          ></div>
          <div
            className="handle handle-bottom absolute left-1/2 bottom-[-4px] w-2 h-2 rounded-full
        bg-slate-300 hover:bg-slate-50 "
          ></div>
          <div
            className="handle handle-left absolute left-[-4px] top-1/2 w-2 h-2 rounded-full 
        bg-slate-300 hover:bg-slate-50 "
          ></div>
          <div
            className="handle handle-right absolute right-[-4px] top-1/2 w-2 h-2 rounded-full
        bg-slate-300 hover:bg-slate-50 "
          ></div>

          <div
            className="
            code-title h-[52px] px-4 flex items-center justify-between
            bg-black bg-opacity-80"
          >
            <div className="dots flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-[#ff5656]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbc6a] "></div>
              <div className="w-3 h-3 rounded-full bg-[#67f772] "></div>
            </div>

            <div className="input-contol w-full">
              <input
                type="text"
                value={`${title}.${getExt(language!)}`}
                onChange={(e) => handleTitleChange(e)}
                className="w-full text-[hsla(0,0%,100%,.6)]  outline-none font-medium 
                text-center bg-transparent"
                style={{
                  lineHeight: "1.8rem",
                }}
              />
            </div>

            <div
              className="icon flex justify-center items-center p-1 bg-black
               bg-opacity-30 rounded-sm"
            >
              <img
                alt="icon"
                src={`/icons/${language}.svg`}
                className="w-[33px]"
              />
            </div>
          </div>
        </div>
        <CodeMirror
          basicSetup={{
            foldGutter: false,
            allowMultipleSelections: false,
            autocompletion: true,
            dropCursor: false,
            lineNumbers: false,
            syntaxHighlighting: true,
          }}
          className="w-full overflow-y-auto"
          height={`calc(${height}px - ${padding} - ${padding} - 52px)`}
          extensions={[fontSize, loadLanguage(language as any)!].filter(
            Boolean
          )}
          value={code}
          theme={themes[theme!] || themes["atomone"]}
          onChange={onChange}
        />
      </Resizable>
    </div>
  );
}

export default CodeEditor;
