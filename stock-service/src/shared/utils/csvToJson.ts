import * as csvtojson from 'csvtojson';
import { ParsedStookResponse } from 'src/modules/stocks/dto/ParsedStookResponse.dto';

class CsvToJson {
  async execute(csvString: string): Promise<ParsedStookResponse[]> {
    const result = await new Promise<any>((resolve, reject) => {
      try {
        csvtojson({ output: 'json' })
          .fromString(csvString)
          .then((result) => {
            resolve(result);
          });
      } catch (error) {
        reject(error);
      }
    });

    return result;
  }
}

export { CsvToJson };
