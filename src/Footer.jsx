import { useStoreState } from "easy-peasy";

const Footer = () => {
  const postCount = useStoreState((state) => state.postCount)
  // const today = new Date()
  return (
    <footer className="Footer">
      {/* <p>Copyright &copy; 2022 - {today.getFullYear()}</p> */}
      <p>{postCount} Blog Posts</p>
    </footer>
  );
};

export default Footer;
