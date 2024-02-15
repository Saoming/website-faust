import { useQuery, gql } from '@apollo/client';
import { Container } from '../Container';

import Link from 'next/link';
import FormatDate from '../FormatDate/FormatDate';


const Posts = () => {

    const { loading, error, data } = useQuery(GET_POSTS);

    if (loading) return 'Loading...';

    if (error) return `Error! ${error.message}`;
    
    console.log(data);

    return (
        <section className="bg-secondary w-full h-full pb-[70px]">
            <Container className="flex flex-row items-start justify-between">
                <aside className='max-w-[640px] w-full lg:w-[640px]'>
                    <div className='flex flex-row items-center justify-between mb-[50px]'>
                        <div className='flex flex-row gap-[10px] items-center'>
                            <span className='text-[#9EAAB7] text-[16px] leading-[24px['>{data.posts.edges.length} POSTS</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M3.33333 14C2.96667 14 2.65267 13.8695 2.39133 13.6086C2.13044 13.3473 2 13.0333 2 12.6666C2 12.3 2.13044 11.986 2.39133 11.7246C2.65267 11.4637 2.96667 11.3333 3.33333 11.3333C3.7 11.3333 4.01378 11.4637 4.27467 11.7246C4.536 11.986 4.66667 12.3 4.66667 12.6666C4.66667 13.0333 4.536 13.3473 4.27467 13.6086C4.01378 13.8695 3.7 14 3.33333 14ZM11.3333 14C11.3333 12.7111 11.0889 11.5026 10.6 10.3746C10.1111 9.24707 9.44178 8.25818 8.592 7.40796C7.74178 6.55818 6.75289 5.88885 5.62533 5.39996C4.49733 4.91107 3.28889 4.66663 2 4.66663V2.66663C3.56667 2.66663 5.03889 2.96396 6.41667 3.55863C7.79444 4.15285 8.99444 4.96107 10.0167 5.98329C11.0389 7.00551 11.8473 8.20551 12.442 9.58329C13.0362 10.9611 13.3333 12.4333 13.3333 14H11.3333ZM7.33333 14C7.33333 12.5222 6.81378 11.264 5.77467 10.2253C4.736 9.18618 3.47778 8.66663 2 8.66663V6.66663C3.02222 6.66663 3.97778 6.8584 4.86667 7.24196C5.75556 7.62507 6.53067 8.14707 7.192 8.80796C7.85289 9.46929 8.37489 10.2444 8.758 11.1333C9.14156 12.0222 9.33333 12.9777 9.33333 14H7.33333Z" fill="#9EAAB7"/>
                            </svg>
                        </div>

                        <div className='flex flex-row gap-[10px] items-center justify-center'>
                            <span className='text-[#9EAAB7] text-[16px] leading-[24px['>View the site’s code</span>

                            <a href='https://github.com/Saoming' aria-label='link to site github code' target='_blank' rel='noreferrer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M7.00008 1.16663C6.23404 1.16663 5.47549 1.31751 4.76776 1.61066C4.06003 1.90381 3.41697 2.33349 2.87529 2.87517C1.78133 3.96913 1.16675 5.45286 1.16675 6.99996C1.16675 9.57829 2.84091 11.7658 5.15675 12.5416C5.44841 12.5883 5.54175 12.4075 5.54175 12.25V11.2641C3.92591 11.6141 3.58175 10.4825 3.58175 10.4825C3.31341 9.80579 2.93425 9.62496 2.93425 9.62496C2.40341 9.26329 2.97508 9.27496 2.97508 9.27496C3.55841 9.31579 3.86758 9.87579 3.86758 9.87579C4.37508 10.7625 5.23258 10.5 5.56508 10.36C5.61758 9.98079 5.76925 9.72413 5.93258 9.57829C4.63758 9.43246 3.27841 8.93079 3.27841 6.70829C3.27841 6.06079 3.50008 5.54163 3.87925 5.12746C3.82091 4.98163 3.61675 4.37496 3.93758 3.58746C3.93758 3.58746 4.42758 3.42996 5.54175 4.18246C6.00258 4.05413 6.50425 3.98996 7.00008 3.98996C7.49591 3.98996 7.99758 4.05413 8.45841 4.18246C9.57258 3.42996 10.0626 3.58746 10.0626 3.58746C10.3834 4.37496 10.1792 4.98163 10.1209 5.12746C10.5001 5.54163 10.7217 6.06079 10.7217 6.70829C10.7217 8.93663 9.35675 9.42663 8.05591 9.57246C8.26591 9.75329 8.45841 10.1091 8.45841 10.6516V12.25C8.45841 12.4075 8.55175 12.5941 8.84925 12.5416C11.1651 11.76 12.8334 9.57829 12.8334 6.99996C12.8334 6.23391 12.6825 5.47537 12.3894 4.76764C12.0962 4.05991 11.6665 3.41684 11.1249 2.87517C10.5832 2.33349 9.94013 1.90381 9.2324 1.61066C8.52467 1.31751 7.76613 1.16663 7.00008 1.16663Z" fill="white" fillOpacity="0.6"/>
                                </svg>
                            </a>
                        </div>

                    </div>
                    <div className='flex flex-col gap-[40px]'>
                        {data.posts.edges.map(({ node }) =>
                            <article className='flex flex-col' key={node.id}>
                                <Link href={node.uri}>
                                    <a aria-label={`click here to go to ${node.title}`}>
                                    <div className='flex flex-row gap-[15px] text-[#9EAAB7] text-[14px] font-firaCode leading-[15px] mb-[14px]'>
                                        <time dateTime={node.date}>
                                            <FormatDate date={node.date} />
                                        </time>
                                        <span>·</span>
                                        <div>
                                            {Math.floor(node.content.length / 220)} mins read
                                        </div>
                                    </div>  
                                    <h2 className='font-firaCode text-[18px] text-white mb-[10px]'>{node.title}</h2>
                                    <p className='text-[rgba(255,255,255,0.60)] text-[18px] font-inconsolata tracking-[0.9px]'>{node.excerpt}</p>
                                    </a>
                                </Link>
                            </article>
                        )}
                    </div>
                </aside>

            </Container>
        </section>

    )

}   

const GET_POSTS = gql`
query NewQuery {
    posts {
      edges {
        node {
          id
          title
          date
          uri
          content
          excerpt(format: RENDERED)
        }
      }
    }
  }
`

export default Posts;