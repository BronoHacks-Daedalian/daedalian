import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const items = body.items;

        var fileContent = "";

        items.forEach((item: any, index: number) => {
            fileContent += `Title: ${item.title}\n`;
            fileContent += `    Description: ${item.description}\n`;
            fileContent += `    Time to complete: ${item.time}\n`;

            if (item.dueDate) {
                const dueDate = new Date(item.dueDate);
                fileContent += `    Due: ${dueDate.toLocaleString()}\n`;
            } else {
                fileContent += `    Due: Not set\n`;
            }

            fileContent += '\n';
        });

        const headers = new Headers();
        headers.set('Content-Type', 'text/plain');
        headers.set('Content-Disposition', 'attachment; filename="todo-list.txt"');

        return new NextResponse(fileContent, {
            status: 200,
            headers: headers
        });

    } catch (error) {
        console.error('Error generating download:', error);
        return NextResponse.json(
            { success: false, message: 'Error generating download' },
            { status: 500 }
        );
    }
}