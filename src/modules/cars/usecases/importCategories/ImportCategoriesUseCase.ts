import csvParse from 'csv-parse';
import fs from 'fs';

import { Category } from '../../models/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoriesUseCase {
  constructor(private repository: ICategoriesRepository) {}

  private loadCategories(
    file: Express.Multer.File,
  ): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];

      const parseFile = csvParse();
      stream.pipe(parseFile);

      parseFile
        .on('data', async line => {
          const [name, description] = line;
          categories.push({
            name,
            description,
          });
        })
        .on('end', () => {
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on('error', err => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.forEach(async category => {
      const { name, description } = category;

      const categoryAlreadyExists = this.repository.findByName(name);
      if (!categoryAlreadyExists) {
        const newCategory = new Category(name, description);
        this.repository.save(newCategory);
      }
    });
  }
}

export { ImportCategoriesUseCase };
