import styled from "styled-components";

const TitleContainer = styled.div`
  height: ${(props) =>
    props.size === "sm" ? "18px" : props.size === "md" ? "26px" : "0px"};
  line-height: ${(props) =>
    props.size === "sm" ? "18px" : props.size === "md" ? "26px" : "0px"};
  font-size: ${(props) =>
    props.size === "sm" ? "13px" : props.size === "md" ? "20px" : "0px"};
  font-family: ${(props) =>
    props.size === "sm"
      ? "marketFont600"
      : props.size === "md"
      ? "marketFont400"
      : "marketFont"};
  text-align: left;
`;

export { TitleContainer };
