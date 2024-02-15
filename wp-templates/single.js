import { useQuery, gql } from '@apollo/client';
import { Container, Header, PostContent } from '../components';
import { Suspense } from 'react';  

export default function Component(props) {

    const databaseId = props.__TEMPLATE_VARIABLES__.databaseId;
    
    const GET_POST_QUERY = gql`
        query GetPost( $databaseId: ID!, $asPreview: Boolean = false) {
            post(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
                title
                content
                date
                author {
                    node {
                      avatar {
                        url
                      }
                      firstName
                      lastName
                    }
                }
            }
        }
    `;
    
    const {loading, error, data } = useQuery(GET_POST_QUERY, {
        variables: { databaseId }
    });

    if ( loading ) return <Loading />;
    if ( error ) return console.log(error);
      
  return (
    <>
        <Header />
        <div className='w-full h-full bg-secondary'>
            <Container className={'flex flex-col items-center justify-center'}>
                <h1 className='text-white text-[50px] font-firaCode font-black capitalize mb-8'>{data.post.title}</h1>
                <div className='mb-[80px] flex flex-row items-center justify-center gap-4'>
                    <a 
                        href="https://twitter.com/sam1337dev" 
                        className='text-white no-underline font-inconsolata flex flex-row items-center justify-center gap-[5px]' 
                        target="_blank" 
                        rel="noreferrer" 
                        aria-label='link to twitter'
                    > 
                        <img className='rounded-full w-[32px] h-[32px]' src={data.post.author.node.avatar.url} />
                        {data.post.author.node.firstName} {data.post.author.node.lastName}
                    </a>

                    <div className='text-white font-inconsolata'>
                        {Math.floor(data.post.content.length / 220)} mins read
                    </div>
                </div>
            </Container>
        </div>
        <Suspense fallback={<Loading />}>
            <PostContent content={data.post.content} />
        </Suspense>
    </>
  );
}

Component.variables = ({ databaseId }, ctx) => {
    return {
      databaseId,
      asPreview: ctx?.asPreview,
    };
};

function Loading() {
    return <h2>🌀 Loading...</h2>;
  }
  