function features() {
    // const [array, setArray] = useState([1, 2, 3, 4]);
    const elementToCheck = smalldogs;
  
    return (
      <div>
        {features.map(item => (
          <div key={features} className={features === elementToCheck ? '' : 'hide'}>
            {element}
          </div>
        ))}
      </div>
    );
  }