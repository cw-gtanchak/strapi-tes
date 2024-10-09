import type { Struct, Schema } from '@strapi/strapi';

export interface TechnologyTechnologyDetails extends Struct.ComponentSchema {
  collectionName: 'components_technology_technology_details';
  info: {
    displayName: 'Technology Details';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    hireDeveloper: Schema.Attribute.Component<'common.button', false>;
    technicalPoints: Schema.Attribute.Component<'common.normal-card', true>;
  };
}

export interface TechnologyTechnologyCombinations
  extends Struct.ComponentSchema {
  collectionName: 'components_technology_technology_combinations';
  info: {
    displayName: 'Technology Combinations';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    listCard: Schema.Attribute.Component<'common.normal-card', true>;
    link: Schema.Attribute.Component<'common.button', false>;
  };
}

export interface TechnologyTechnologyBriefIntro extends Struct.ComponentSchema {
  collectionName: 'components_technology_technology_brief_intros';
  info: {
    displayName: 'Technology Brief Intro';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    link: Schema.Attribute.Component<'common.button', false>;
    technologyImage: Schema.Attribute.Component<'common.image', false>;
    technologyIcon: Schema.Attribute.Component<'common.image', false>;
  };
}

export interface TechnologyBenefitsSection extends Struct.ComponentSchema {
  collectionName: 'components_technology_benefits_sections';
  info: {
    displayName: 'Benefits Section';
    description: '';
  };
  attributes: {
    heading: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    benefitsPoints: Schema.Attribute.Component<'common.text', true>;
    benefitsImages: Schema.Attribute.Component<'common.image', true>;
  };
}

export interface DetailsBlogsContent extends Struct.ComponentSchema {
  collectionName: 'components_details_blogs_contents';
  info: {
    displayName: 'blogsContent';
  };
  attributes: {};
}

export interface DetailsBlogContent extends Struct.ComponentSchema {
  collectionName: 'components_details_blog_contents';
  info: {
    displayName: 'Blog Content';
    icon: 'bulletList';
  };
  attributes: {
    contentTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    contentImage: Schema.Attribute.Media<'images'>;
    contentData: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 100;
      }>;
  };
}

export interface CommonText extends Struct.ComponentSchema {
  collectionName: 'components_common_texts';
  info: {
    displayName: 'Text';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface CommonTags extends Struct.ComponentSchema {
  collectionName: 'components_common_tags';
  info: {
    displayName: 'Tags';
  };
  attributes: {
    ai: Schema.Attribute.Boolean;
    web_design: Schema.Attribute.Boolean;
    career: Schema.Attribute.Boolean;
    python: Schema.Attribute.Boolean;
    react: Schema.Attribute.Boolean;
  };
}

export interface CommonNormalCard extends Struct.ComponentSchema {
  collectionName: 'components_common_normal_cards';
  info: {
    displayName: 'Normal Card';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    images: Schema.Attribute.Component<'common.image', true>;
  };
}

export interface CommonImage extends Struct.ComponentSchema {
  collectionName: 'components_common_images';
  info: {
    displayName: 'Image';
    icon: 'picture';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CommonContentCard extends Struct.ComponentSchema {
  collectionName: 'components_common_content_cards';
  info: {
    displayName: 'Content Card';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 196;
      }>;
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface CommonButton extends Struct.ComponentSchema {
  collectionName: 'components_common_buttons';
  info: {
    displayName: 'Link';
    description: '';
    icon: 'link';
  };
  attributes: {
    title: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'technology.technology-details': TechnologyTechnologyDetails;
      'technology.technology-combinations': TechnologyTechnologyCombinations;
      'technology.technology-brief-intro': TechnologyTechnologyBriefIntro;
      'technology.benefits-section': TechnologyBenefitsSection;
      'details.blogs-content': DetailsBlogsContent;
      'details.blog-content': DetailsBlogContent;
      'common.text': CommonText;
      'common.tags': CommonTags;
      'common.normal-card': CommonNormalCard;
      'common.image': CommonImage;
      'common.content-card': CommonContentCard;
      'common.button': CommonButton;
    }
  }
}
