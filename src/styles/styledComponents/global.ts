import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a {
    list-style: none;
    text-decoration: none;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  .todo_lists{
    position: absolute;
    right: 0;
    left: 0;
    width: 90%;
    height: 70%;
    margin: 2% auto;
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    overflow-y: scroll;
    .todo_list{
        width: 300px;
        height: 200px;
        display: flex;
        justify-content: space-around;
        box-shadow: 4px 3px 3px 2px rgb(243, 239, 239);
        background-color: rgb(243, 243, 243);
        border-radius: 20px;
        margin-top: 10px;
        cursor: pointer;
        transition: .3s;
        .content{
            margin-top: 20px;
            .title{
                width: 150px;
                overflow-x: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .date{
                font-size: 16px;
                font-weight: 600;
                color: #333;
            }
        }
    }
    .todo_list:hover{
        transform: translateY(-10px);
        background-color: rgb(206, 206, 206);
    }
  }
`

export default Global;