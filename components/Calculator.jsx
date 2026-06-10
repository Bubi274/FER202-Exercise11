import { useState } from 'react';

export default function Calculator() {
  const [firstNum, setFirstNum] = useState('');
  const [secondNum, setSecondNum] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState('');

  const handleCompute = () => {
    const num1 = parseFloat(firstNum);
    const num2 = parseFloat(secondNum);

    if (isNaN(num1) || isNaN(num2)) {
      setResult('Error');
      return;
    }

    let calcResult;
    switch (operator) {
      case '+':
        calcResult = num1 + num2;
        break;
      case '-':
        calcResult = num1 - num2;
        break;
      case '*':
        calcResult = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          setResult('Infinity');
          return;
        }
        calcResult = num1 / num2;
        break;
      default:
        calcResult = '';
    }

    setResult(Number(calcResult.toFixed(8)).toString());
  };

  return (
    <div>
      <div className="calc-container">
        <table className="calc-table">
          <tbody>
            <tr>
              <td>First:</td>
              <td>
                <input
                  type="number"
                  value={firstNum}
                  onChange={(e) => setFirstNum(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Second:</td>
              <td>
                <input
                  type="number"
                  value={secondNum}
                  onChange={(e) => setSecondNum(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Operator</td>
              <td>
                <select
                  value={operator}
                  onChange={(e) => setOperator(e.target.value)}
                >
                  <option value="+">+</option>
                  <option value="-">-</option>
                  <option value="*">*</option>
                  <option value="/">/</option>
                </select>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button type="button" onClick={handleCompute}>
                  Compute
                </button>
              </td>
            </tr>
            <tr>
              <td>Result:</td>
              <td>
                <input
                  type="text"
                  value={result}
                  readOnly
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
