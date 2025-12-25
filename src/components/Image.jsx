import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled("div")`
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 15px;

    &:last-child {
      margin-right: 0;
    }

    height: 100%;
    display: inline-block;
    vertical-align: top;
  }
`;

const LoadingWrapper = styled("div")`
  position: relative;
  height: 0;
  padding-bottom: 100%;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding-bottom: 80vh;
    width: 80vh;
  }
`;

const IconWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  position: absolute;
  top: 0
  left: 0;
`;

const Img = styled("img")`
  width: 100%;
  display: block;
  ${({ loading }) =>
    loading
      ? css`
          display: none;
        `
      : ""}

  @media screen and (min-width: 768px) {
    height: 100%;
    width: auto;
  }
`;

export const Image = ({ url }) => {
  const [loading, setLoading] = useState(true);
  return (
    <Wrapper>
      {loading && (
        <LoadingWrapper>
          <IconWrapper>
            <FontAwesomeIcon icon={faCircleNotch} spin />
            <i className="fa fa-circle-o-notch fa-spin"></i>
          </IconWrapper>
        </LoadingWrapper>
      )}
      <Img
        src={url}
        loading={loading}
        onLoad={() => {
          setLoading(false);
        }}
        alt=""
      />
    </Wrapper>
  );
};
