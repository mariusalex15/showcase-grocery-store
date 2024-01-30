import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent {
  posts = [
    {
      id: 1,
      title: '6 ways to prepare breakfast for 30',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at porta est. Donec vel turpis eu nisi vulputate scelerisque eget nec turpis. In congue ornare nisl ut pharetra. Cras posuere neque nisi, vitae placerat nisl dictum lobortis. Vestibulum aliquet venenatis felis, eu tristique augue. Maecenas at libero auctor eros placerat convallis ut eu lacus. Nunc id ex est. Etiam tincidunt nisl libero, quis scelerisque ligula condimentum at.',
      image: 'blog-2.jpg',
      comments: 4,
    },
    {
      id: 2,
      title: 'Visit the clean farm in Romania',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at porta est. Donec vel turpis eu nisi vulputate scelerisque eget nec turpis. In congue ornare nisl ut pharetra. Cras posuere neque nisi, vitae placerat nisl dictum lobortis. Vestibulum aliquet venenatis felis, eu tristique augue. Maecenas at libero auctor eros placerat convallis ut eu lacus. Nunc id ex est. Etiam tincidunt nisl libero, quis scelerisque ligula condimentum at. Quisque congue nec eros vel semper. Nunc maximus mollis faucibus. Mauris eget suscipit massa. Maecenas ut ullamcorper tellus, quis euismod nibh. Nulla consectetur odio augue, vel sollicitudin lectus vestibulum in. Etiam commodo turpis in accumsan placerat.',
      image: 'blog-3.jpg',
      comments: 1,
    },
    {
      id: 3,
      title: 'Cooking tips make cooking simple',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at porta est. Donec vel turpis eu nisi vulputate scelerisque eget nec turpis. In congue ornare nisl ut pharetra. Cras posuere neque nisi, vitae placerat nisl dictum lobortis. Vestibulum aliquet venenatis felis, eu tristique augue. Maecenas at libero auctor eros placerat convallis ut eu lacus. Nunc id ex est. Etiam tincidunt nisl libero, quis scelerisque ligula condimentum at.',
      image: 'blog-1.jpg',
      comments: 5,
    },
    {
      id: 4,
      title: 'Cooking tips make cooking simple',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at porta est. Donec vel turpis eu nisi vulputate scelerisque eget nec turpis. In congue ornare nisl ut pharetra. Cras posuere neque nisi, vitae placerat nisl dictum lobortis. Vestibulum aliquet venenatis felis, eu tristique augue. Maecenas at libero auctor eros placerat convallis ut eu lacus. Nunc id ex est. Etiam tincidunt nisl libero, quis scelerisque ligula condimentum at.',
      image: 'blog-4.jpg',
      comments: 5,
    },
    {
      id: 5,
      title: 'The Moment You Need To Remove Garlic From The Menu',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at porta est. Donec vel turpis eu nisi vulputate scelerisque eget nec turpis. In congue ornare nisl ut pharetra. Cras posuere neque nisi, vitae placerat nisl dictum lobortis. Vestibulum aliquet venenatis felis, eu tristique augue. Maecenas at libero auctor eros placerat convallis ut eu lacus. Nunc id ex est. Etiam tincidunt nisl libero, quis scelerisque ligula condimentum at.',
      image: 'blog-4.jpg',
      comments: 2,
    },
    {
      id: 6,
      title: 'Cooking tips make cooking simple',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at porta est. Donec vel turpis eu nisi vulputate scelerisque eget nec turpis. In congue ornare nisl ut pharetra. Cras posuere neque nisi, vitae placerat nisl dictum lobortis. Vestibulum aliquet venenatis felis, eu tristique augue. Maecenas at libero auctor eros placerat convallis ut eu lacus. Nunc id ex est. Etiam tincidunt nisl libero, quis scelerisque ligula condimentum at.',
      image: 'blog-6.jpg',
      comments: 9,
    },
  ];
}
