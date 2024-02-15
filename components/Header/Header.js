import { useQuery, gql } from '@apollo/client';
import { Container } from '../Container';
import Link from 'next/link';

const Header = () => {
    const { loading, error, data } = useQuery(GET_LOGO);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    
    return (
        <header className="bg-secondary w-full h-full pt-[50px] pb-[70px]">
            <Container className="flex flex-row items-center justify-between">
              <Link href="/">
                <img
                    className='cursor-pointer' 
                    src={data.globalSetting.information.brandingLogoWhite.node.sourceUrl} 
                    alt={data.globalSetting.information.brandingLogoWhite.node.altText} 
                />
              </Link>

                <div className='flex flex-row items-center gap-[17px]'>
                    <span className='text-[18px] font-outline-2 font-extrabold text-[transparent] font-inter tracking-[0.9px]'>
                            CREATIVE / FRONT END
                    </span>
                    <div className='bg-[#EDD95C] rounded-full w-[35px] h-[35px]'></div>
                </div>
            </Container>
        </header>
    )
}


const GET_LOGO = gql`
query NewQuery {
    globalSetting {
      information {
        brandingLogoBlack {
          node {
            sourceUrl
            altText
          }
        }
        brandingLogoWhite {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`

export default Header;