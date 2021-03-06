import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AccordionComponent, AccordionModule } from '../public-api';

describe('AccordionComponent', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AccordionModule],
      declarations: [TestComponent],
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should render correct construction', () => {
    fixture.detectChanges();
    const accordionItemHeaderEl = fixture.debugElement.query(
      By.css('.aui-accordion-item__header-toggle'),
    ).nativeElement as HTMLElement;
    expect(accordionItemHeaderEl).not.toBeNull();
    expect(
      accordionItemHeaderEl.querySelector('use').getAttribute('xlink:href'),
    ).toBe('#aui-icon-angle_right');
  });

  it('accordion item content show when click icon', () => {
    fixture.detectChanges();
    const accordionItemHeaderEl = fixture.debugElement.query(
      By.css('.aui-accordion-item__header'),
    ).nativeElement as HTMLElement;
    accordionItemHeaderEl.dispatchEvent(new Event('click'));

    fixture.detectChanges();
    const accordionContentBodyEl = fixture.debugElement.query(
      By.css('.aui-accordion-item__content-body'),
    ).nativeElement as HTMLElement;
    expect(accordionContentBodyEl.hidden).toBeFalsy();
  });
});

@Component({
  template: `
    <aui-accordion class="aui-accordion-test" #accordionRef [multi]="multi">
      <aui-accordion-item>
        <div auiAccordionItemHeader>header1</div>
        <div>content</div>
      </aui-accordion-item>
    </aui-accordion>
  `,
})
class TestComponent {
  multi: boolean;

  @ViewChild('accordionRef', { static: true })
  accordionRef: AccordionComponent;
}
