export default function renderTextSegments(segments) {
  const renderers = {
    bold: (text, key) => <strong key={key}>{text}</strong>,
    italic: (text, key) => <em key={key}>{text}</em>,
    underline: (text, key) => <u key={key}>{text}</u>,
    link: (text, key, segment) => (
      <a
        key={key}
        href={segment.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    ),
    default: (text, key) => <span key={key}>{text}</span>,
  };

  return segments.map((segment, index) => {
    const renderer = renderers[segment.type] || renderers.default;
    return renderer(segment.text, index, segment);
  });
}
