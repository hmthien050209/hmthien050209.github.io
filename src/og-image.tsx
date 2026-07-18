/** @jsxImportSource react */
import type { RenderFunctionInput } from 'astro-takumi';

export async function ogImage({ title, description }: RenderFunctionInput) {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'oklch(21% 0.006 285.885)',
        padding: '60px 80px',
        color: 'oklch(96.7% 0.001 286.375)',
        fontFamily: 'Noto Sans Display Variable',
        fontVariationSettings: "'wght' 500, 'wdth' 87.5"
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: 'auto',
        }}
      >
        <span style={{ fontSize: 20, opacity: 0.8 }}>hmthien050209.github.io</span>
      </div>
      <h1
        style={{
          fontSize: 72,
          fontWeight: 700,
          lineHeight: 1.2,
          margin: '0 0 24px 0',
          letterSpacing: '-0.02em',
        }}
      >
        {title}
      </h1>
      {description && (
        <p
          style={{
            fontSize: 32,
            opacity: 0.7,
            lineHeight: 1.4,
            margin: 0,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
