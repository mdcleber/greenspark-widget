import { FC, useEffect, useState } from 'react';
import "./Products.css";
import Widget from './components/Widget/Widget';
import { WidgetModel } from './dataType';

const Products: FC = () => {
  const [widgets, setWidgets] = useState<WidgetModel[]>([]);

  const handleAciveStateChange = (activeWidget: WidgetModel) => {
    const t = [...widgets]
    const index = t.findIndex(x => x.id === activeWidget.id);
    t[index] = activeWidget;

    if (activeWidget.active) {
      t.forEach(x => x.active = activeWidget.id === x.id);
    }

    setWidgets(t);
  };

  useEffect(() => {
    fetch('https://api.mocki.io/v2/016d11e8/product-widgets')
      .then(async (request) => {
        const response = await request.text();
        setWidgets(JSON.parse(response));
      })
      .catch(console.log);
  }, []);

  const widgetsList = widgets.map((widget: WidgetModel) => (
    <Widget  widget={widget} key={widget.id} onWidgetChanged={handleAciveStateChange} />
  ));

  return (
    <div className='product'>
      <h3>Per product widgets</h3>
      <hr />
      <div className='widgets-container'>{widgetsList}</div>
    </div>
  );
}

export default Products;
