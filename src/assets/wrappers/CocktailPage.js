import styled from 'styled-components'

const Wrapper = styled.div`
  header {
    text-align: center;
    margin-bottom: 3rem;
  }
  .btn {
    margin-bottom: 0.5rem;
  }
  img {
    border-radius: var(--borderRadius);
  }
  .drink-ifno {
    padding-top: 2rem;
  }
  .drink p {
    font-weight: 700;
    text-transform: capitalize;
    line-height: 2;
    margin-bottom: 1rem;
  }
  .drink-data {
    background: var(--primary-300);
    padding: 0.25rem 0.5rem;
    border-radius: var(--borderRadius);
    margin: 0.5rem;
    color: var(--primary-800);
    letter-spacing: var(--letterSpacing);
  }
  .ing {
    display: inline-block;
    margin-right: 0.5rem;
  }
  @media (min-width: 992px) {
    .drink {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 2rem;
      align-items: center;
    }
    .drink-ifno {
      padding-top: 0;
    }
  }
`

export default Wrapper
