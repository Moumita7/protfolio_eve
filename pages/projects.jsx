import React from 'react'
import Link from 'next/link'
import { Box, Grid, Heading} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
// import { TbGitFork } from 'react-icons/tb';
// import { AiOutlineFolder } from 'react-icons/ai';
// import { AiOutlineStar } from 'react-icons/ai';

// AiOutlineStar

// AiOutlineFolder
// TbGitFork



const Projects = ({projects}) => {
    console.log(projects)
    return (
        <Box bgColor="#2D3748" p="3">
            <Heading textAlign="center" mb="5">Projects</Heading>
            <Box >
            <Grid gap="10" gridTemplateColumns='repeat(3,1fr)'>
            {projects.map((el)=>(
                <>   
                <Box border="1px solid black" borderRadius="5" textAlign="center" p="5" mb="2">     
                 <Heading fontSize="2xl" mb="2" as="h2"><Link href={el.clone_url}>{el.name}</Link></Heading>
                 <Heading fontSize="x"  mb="2" as="h4"><StarIcon mr="2"/>{el.stargazers_count}</Heading>
                  <Heading fontSize="x" as="h4">Fork Count : {el.forks_count}</Heading> 
                 <Heading fontSize="x" as="h4">Language : {el.language}</Heading> 
             
            

                </Box>
                </>
              
            ))}
            </Grid>
        </Box>
        </Box>
      )
    }

export default Projects


export async function getStaticProps(){
    let res=await fetch("https://api.github.com/search/repositories?q=user:moumita7+fork:true&sort=updated&per_page=10&type=Repositories")
    let data=await res.json()
    return{
        props:{
            projects:data.items,
        }
    }
}