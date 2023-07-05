import { css } from 'lit';

export const style = [
  css`
    :host {
      display: block;
      text-align: center;
      --font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      text-align: center;
    }

    button {
      padding: 10px 20px;
      font-size: 18px;
      margin-top: 20px;
      align-self: center;
      font-family: (var --font-family);
      font-size: 40px;
      font-weight: 500;
      background-color: var(--button-background-color);
      border: 3px solid white;
      color: white;
    }

    #color-box {
      width: 900px;
      height: 600px;
      margin: 50px auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    #box-color {
      width: 600px;
      height: 150px;
      margin: 50px auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: black;
      color: white;
      font-family: (var --font-family);
      font-size: 40px;
      font-weight: 500;
      border: 3px solid black;
    }
  `,
];
