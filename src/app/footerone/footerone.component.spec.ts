/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FooteroneComponent } from './footerone.component';

describe('FooteroneComponent', () => {
  let component: FooteroneComponent;
  let fixture: ComponentFixture<FooteroneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooteroneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooteroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
