export default function PostEntry({ title, excerpt, date, author }) {
  return (
    <>
      <div>
        <h2 className="text-lg">{title}</h2>
        <p dangerouslySetInnerHTML={{ __html: excerpt }}></p>
      </div>
      <br />
    </>
  );
}
