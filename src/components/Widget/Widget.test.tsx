import { fireEvent, render } from '@testing-library/react';
import { ColorsCode, ColorsType } from '../../colorsHelper';
import { ActionType, MaterialType, WidgetModel } from '../../dataType';
import Widget from './Widget';

// Mocking onWidgetChanged function
const mockOnWidgetChanged = jest.fn();

const sampleWidget: WidgetModel = {
  id: 1,
  action: ActionType.Offsets,
  amount: 100,
  type: MaterialType.Carbon,
  selectedColor: ColorsType.Beige,
  active: true,
  linked: false
};

describe('Widget component', () => {
  it('renders correctly with provided widget props', () => {
    const { getByText } = render(
      <Widget widget={sampleWidget} onWidgetChanged={mockOnWidgetChanged} />
    );

    expect(getByText(`This product ${sampleWidget.action}`)).toBeInTheDocument();
    expect(getByText(`${sampleWidget.amount}kgs of ${sampleWidget.type}`)).toBeInTheDocument();
  });

  it('calls onWidgetChanged with updated linked value when Link to Public Profile checkbox is toggled', () => {
    const { getByTestId } = render(
      <Widget widget={sampleWidget} onWidgetChanged={mockOnWidgetChanged} />
    );

    const linkCheckbox = getByTestId('link-to-profile-checkbox');
    linkCheckbox.click();

    expect(mockOnWidgetChanged).toHaveBeenCalledWith(expect.objectContaining({ linked: true }));
  });

  it('calls onWidgetChanged with updated selectedColor value when ColorBoxSelect value is changed', () => {
    const { getByTestId } = render(
      <Widget widget={sampleWidget} onWidgetChanged={mockOnWidgetChanged} />
    );

    const colorSelect = getByTestId(`color-box-${ColorsCode.beige}`);
    colorSelect.click();

    expect(mockOnWidgetChanged).toHaveBeenCalledWith(expect.objectContaining({ selectedColor: ColorsType.Beige }));
  });

  it('calls onWidgetChanged with updated active value when Activate badge toggle is toggled', () => {
    const { getByTestId } = render(
      <Widget widget={sampleWidget} onWidgetChanged={mockOnWidgetChanged} />
    );

    const toggleSwitch = getByTestId('active-badge-toggle');
    toggleSwitch.click();
    expect(mockOnWidgetChanged).toHaveBeenCalledWith(expect.objectContaining({ active: false }));
  });

  it('display tooltip when clicked on info', () => {
    const { getByTestId } = render(
      <Widget widget={sampleWidget} onWidgetChanged={mockOnWidgetChanged} />
    );

    const tooltip = getByTestId('tooltip');
    const tooltipText = getByTestId('tooltip-info');
    const computedStyle = window.getComputedStyle(tooltipText);
    fireEvent.mouseEnter(tooltip);

    expect(computedStyle.visibility).toBe('visible');
  });
});
