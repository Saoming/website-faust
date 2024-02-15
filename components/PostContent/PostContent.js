import { Container } from "../Container";


const PostContent = ({ content, children }) => {
    return (
      <article className="bg-secondary w-full h-full pb-[70px]">
        <Container>
            <div className="text-white font-inconsolata" dangerouslySetInnerHTML={{ __html: content ?? '' }} />
            {children}
        </Container>
      </article>
    );
}
  
export default PostContent;