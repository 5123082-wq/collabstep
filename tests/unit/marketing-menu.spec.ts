import { findCtaHref, marketingMenu } from '@/config/MarketingMenu.config';

describe('marketing menu config', () => {
  it('содержит все верхние пункты', () => {
    const topLevelIds = marketingMenu.map((item) => item.id);
    expect(topLevelIds).toEqual([
      'product',
      'audience',
      'projects',
      'specialists',
      'contractors',
      'pricing',
      'blog',
      'auth'
    ]);
  });

  it('возвращает корректные CTA ссылки', () => {
    expect(findCtaHref('product', 'ai')).toBe('/product/ai');
    expect(findCtaHref('audience', 'founder')).toBe('/register');
    expect(findCtaHref('projects', 'cases')).toBe('/projects/cases');
    expect(findCtaHref('contractors')).toBe('/contractors');
    expect(findCtaHref('unknown')).toBeNull();
  });
});
