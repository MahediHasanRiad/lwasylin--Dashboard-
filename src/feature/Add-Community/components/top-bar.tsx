
interface TopBarType {
    title: string;
    description: string
}

function TopBar({title, description}: TopBarType) {
  return (
    <section>
      <div>
        <h1 className="text-lg lg:text-3xl font-semibold font-secondary">
          {title}
        </h1>
        <p className="text-md md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}

export default TopBar;
