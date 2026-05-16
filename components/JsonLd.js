export default function JsonLd({ data }) {
  const payload = Array.isArray(data) ? data.filter(Boolean) : data;

  if (!payload || (Array.isArray(payload) && !payload.length)) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(payload).replace(/</g, "\\u003c"),
      }}
    />
  );
}
