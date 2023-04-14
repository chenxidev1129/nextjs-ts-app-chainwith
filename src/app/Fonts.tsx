import { Inter } from "next/font/google";
import { useServerInsertedHTML } from "next/navigation";

const heading = Inter({
  subsets: ['latin'],
  variable: '--font-family-heading',
  fallback: ['--font-family-sans'],
  weight: ['400', '500'],
  display: 'swap',
});

export default function Fonts() {
  useServerInsertedHTML(() => {
    return (
      <style
        dangerouslySetInnerHTML={{
          __html: `
          :root {
            --font-family-sans: '-apple-system', 'BlinkMacSystemFont', 'Apple SD Gothic Neo', 'Pretendard Variable', 'Pretendard', 'Roboto', 'Noto Sans KR', 'Segoe UI', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'sans-serif';
            --font-family-heading: ${heading.style.fontFamily};
          }
        `,
        }}
      />
    );
  });

  return null;
}