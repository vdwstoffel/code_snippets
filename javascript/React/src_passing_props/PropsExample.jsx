export default function PropsExample(props) {
  const { name, surname } = props;
  return (
    <p>
      Hello {name} {surname}
    </p>
  );
}
